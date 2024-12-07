import { binarySearch } from "../src/binarySearch";
test("test find middle num", () => {
    expect(binarySearch([1, 2, 3], 2)).toEqual(1);
});

test("test find first num", () => {
    expect(binarySearch([1, 4, 7, 9], 1)).toEqual(0);
});

test("test find last num", () => {
    expect(binarySearch([1, 4, 7, 9], 9)).toEqual(3);
});

test("test cannot find num, null", () => {
    expect(binarySearch([1, 4, 7, 9], 13)).toEqual(null);
});

test("test cannot find num, empty array", () => {
    expect(binarySearch([], 13)).toEqual(null);
});
