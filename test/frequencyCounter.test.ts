import { same } from "../src/frequencyCounter";

test("frequencyCounter: given array [ 1, 2, 3 ], [ 4, 1, 9 ], should be true", () => {
    expect(same([1, 2, 3], [4, 1, 9])).toEqual(true);
});

test("frequencyCounter: given array [ 2, 2, 3 ], [ 4, 9, 4 ], should be true", () => {
    expect(same([2, 2, 3], [4, 9, 4])).toEqual(true);
});

test("frequencyCounter: given array [ 2, 3 ], [ 4, 9, 4 ], should be false", () => {
    expect(same([2, 3], [4, 9, 4])).toEqual(false);
});

test("frequencyCounter: given array [ 2, 7, 3 ], [ 4, 9, 4 ], should be false", () => {
    expect(same([2, 7, 3], [4, 9, 4])).toEqual(false);
});

test("frequencyCounter: given array [ 2, 7, 3 ], [ 49, 9 ], should be false", () => {
    expect(same([2, 7, 3], [49, 9])).toEqual(false);
});

test("frequencyCounter: given array [], [], should be true", () => {
    expect(same([], [])).toEqual(true);
});
