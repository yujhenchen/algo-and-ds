import { getMaxSumSubArray } from "../src/maxSumSubArray";

test("getMaxSumSubArray: given array [], should be 0", () => {
    expect(getMaxSumSubArray([])).toEqual(0);
});

test("getMaxSumSubArray: given array [ 0 ], should be 0", () => {
    expect(getMaxSumSubArray([0])).toEqual(0);
});

test("getMaxSumSubArray: given array [ -1, -2 ], should be 0", () => {
    expect(getMaxSumSubArray([-1, -2])).toEqual(0);
});

test("getMaxSumSubArray: given array [ -1, 1 ], should be 1", () => {
    expect(getMaxSumSubArray([-1, 1])).toEqual(1);
});

test("getMaxSumSubArray: given array [ -1, 1, -2 ], should be 1", () => {
    expect(getMaxSumSubArray([-1, 1, -2])).toEqual(1);
});

test("getMaxSumSubArray: given array [ -1, 1, -2, 3, 4, -5 ], should be 7", () => {
    expect(getMaxSumSubArray([-1, 1, -2, 3, 4, -5])).toEqual(7);
});

test("getMaxSumSubArray: given array [ 8, -1, 1, -2, 3, 4, -5 ], should be 8", () => {
    expect(getMaxSumSubArray([8, -1, 1, -2, 3, 4, -5])).toEqual(8);
});
