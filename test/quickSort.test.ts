import { quickSort } from "../src/quickSort";

test("sorted should be correct, no element", () => {
    expect(quickSort([])).toEqual([]);
});

test("sorted should be correct, single element", () => {
    expect(quickSort([1])).toEqual([1]);
});

test("sorted should be correct, 2 element", () => {
    expect(quickSort([3, 1])).toEqual([1, 3]);
});

test("sorted should be correct, with negative element", () => {
    expect(quickSort([1, -7, 13, 6])).toEqual([-7, 1, 6, 13]);
});

test("sorted should be correct, positive elements", () => {
    expect(quickSort([0, 7, 5, 11, 6, 9])).toEqual([0, 5, 6, 7, 9, 11]);
});
