import { countUniqueValues, sumZero } from "../src/multiplePointers";

// test sumZero
test("sumZero: given array [], should be []", () => {
    expect(sumZero([])).toEqual([]);
});

test("sumZero: given array [0], should be []", () => {
    expect(sumZero([0])).toEqual([]);
});

test("sumZero: given array [-3, -1, 0, 1, 5, 6], should be [-1, 1]", () => {
    expect(sumZero([-3, -1, 0, 1, 5, 6])).toEqual([-1, 1]);
});

test("sumZero: given array [1, 2, 3], should be []", () => {
    expect(sumZero([1, 2, 3])).toEqual([]);
});

test("sumZero: given array [-2, 0, 1, 3], should be []", () => {
    expect(sumZero([-2, 0, 1, 3])).toEqual([]);
});

// test countUniqueValues
test("countUniqueValues: given array length less than 2, should return array length", () => {
    expect(countUniqueValues([1])).toEqual(1);
    expect(countUniqueValues([])).toEqual(0);
});

test("countUniqueValues: given array with unique values, should return array length", () => {
    expect(countUniqueValues([1, 2, 3, 4, 5])).toEqual(5);
});

test("countUniqueValues: given array with duplicate values, should return unique count", () => {
    expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toEqual(2);
});

test("countUniqueValues: given array with duplicate values at the beginning, should return unique count", () => {
    expect(countUniqueValues([1, 1, 2, 3, 4, 4, 5])).toEqual(5);
});

test("countUniqueValues: given array with duplicate values at the end, should return unique count", () => {
    expect(countUniqueValues([1, 2, 3, 4, 5, 5, 5])).toEqual(5);
});

test("countUniqueValues: given array with a single unique value, should return 1", () => {
    expect(countUniqueValues([1, 1, 1, 1, 1])).toEqual(1);
});

test("countUniqueValues: given an empty array, should return 0", () => {
    expect(countUniqueValues([])).toEqual(0);
});