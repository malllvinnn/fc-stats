import { expect, test } from '@jest/globals';
import { average, median, sum } from './index.js';

// sum
test('sum([1, 2, 4, 8, 16]) should be equal 31', () => {
  expect(sum([1, 2, 4, 8, 16])).toBe(31)
});

test('sum([]) should be equal 31', () => {
  expect(sum([])).toBe(0)
});

test('sum("not an array") throws ErrorInvalidArgument', () => {
  expect(() => sum("not an array")).toThrow("Input must be an array of numbers.")
})

// average
test('average([1, 2, 4, 8, 16]) == 6.2', () => {
  expect(average([1, 2, 4, 8, 16])).toBe(6.2)
})

test('average([1, 2, 4]) == 2.33+', () => {
  expect(average([1, 2, 4])).toBeCloseTo(2.33)
})

test('average([]) Throw ErrorInvalidArgument', () => {
  expect(() => average([])).toThrow('Array cannot be empty.')
})

test('average("not an array") Throw ErrorInvalidArgument', () => {
  expect(() => average("not an array")).toThrow('Input must be a non-empty array of numbers.')
})

// median
test('median([1, 3, 5]) == 3', () => {
  expect(median([1, 3, 5])).toBe(3)
})

test('median([1, 2, 3, 4]) == 2.5', () => {
  expect(median([1, 2, 3, 4])).toBe(2.5)
})

test('median("not an array") == Input must be an array of numbers.', () => {
  expect(() => median("not an array")).toThrow('Input must be an array of numbers.')
})

test('median([]) == Array cannot be empty.', () => {
  expect(() => median([])).toThrow('Array cannot be empty.')
})