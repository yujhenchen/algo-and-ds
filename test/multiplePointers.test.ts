import { sumZero } from "../src/multiplePointers";

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
