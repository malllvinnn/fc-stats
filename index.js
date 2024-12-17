/**
 * Custom error class for invalid arguments.
 * Thrown when a function receives an unexpected argument.
 */
class ErrorInvalidArgument extends Error {
  /**
   * Creates an instance of ErrorInvalidArgument.
   * @param {string} [message="Invalid argument provided"] - Error message (optional).
   */
  constructor(message = "Invalid argument provided") {
    super(message);
    this.name = "ErrorInvalidArgument";
  }
}

/**
 * Sums all elements in an array.
 *
 * @param {number[]} nums - The array of numbers to sum.
 * @returns {number} - The total sum of the array elements.
 * @throws {ErrorInvalidArgument} - Thrown if the input is not an array of numbers.
 *
 * @example
 * // Returns 31
 * sum([1, 2, 4, 8, 16]);
 *
 * @example
 * // Throws ErrorInvalidArgument
 * sum("not an array");
 */
export function sum(nums) {
  if (!Array.isArray(nums) || !nums.every(num => typeof num === "number")) {
    throw new ErrorInvalidArgument("Input must be an array of numbers.");
  }
  return nums.reduce((acc, curr) => acc + curr, 0);
}

/**
 * Calculates the average of all elements in an array.
 *
 * @param {number[]} nums - The array of numbers to calculate the average.
 * @returns {number | NaN} - The average value of the array.
 * @throws {ErrorInvalidArgument} - Thrown if the array is empty or not an array of numbers.
 *
 * @example
 * // Returns 6.2
 * average([1, 2, 4, 8, 16]);
 *
 * @example
 * // Throws ErrorInvalidArgument
 * average([]);
 */
export function average(nums) {
  if (!Array.isArray(nums) || !nums.every(num => typeof num === "number")) {
    throw new ErrorInvalidArgument("Input must be a non-empty array of numbers.");
  }
  if (nums.length === 0) {
    throw new ErrorInvalidArgument("Array cannot be empty.");
  }
  return sum(nums) / nums.length;
}

/**
 * Calculates the median of all elements in an array.
 *
 * @param {number[]} nums - The array of numbers to calculate the median.
 * @returns {number} - The median value of the array.
 * @throws {ErrorInvalidArgument} - Thrown if the input is not an array of numbers.
 *
 * @example
 * // Returns 3
 * median([1, 3, 5]);
 *
 * @example
 * // Returns 2.5
 * median([1, 2, 3, 4]);
 */
export function median(nums) {
  if (!Array.isArray(nums) || !nums.every(num => typeof num === "number")) {
    throw new ErrorInvalidArgument("Input must be an array of numbers.");
  }
  if (nums.length === 0) {
    throw new ErrorInvalidArgument("Array cannot be empty.");
  }

  const sorted = [...nums].sort((a, b) => a - b);
  const midIndex = Math.floor(sorted.length / 2);

  return isEven(sorted.length) ?
    (sorted[midIndex - 1] + sorted[midIndex]) / 2 :
    sorted[midIndex];
}


function isEven(n) {
  return n % 2 === 0;
}


