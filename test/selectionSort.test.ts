import { selectionSort } from "../src/selectionSort";

test("sorted should be correct, no element", () => {
    expect(selectionSort([])).toEqual([]);
});

test("sorted should be correct, single element", () => {
    expect(selectionSort([1])).toEqual([1]);
});

test("sorted should be correct, 2 element", () => {
    expect(selectionSort([3, 1])).toEqual([1, 3]);
});

test("sorted should be correct, with negative element", () => {
    expect(selectionSort([1, -7, 13, 6])).toEqual([-7, 1, 6, 13]);
});

test("sorted should be correct, positive elements", () => {
    expect(selectionSort([0, 7, 5, 11, 6, 9])).toEqual([0, 5, 6, 7, 9, 11]);
});
