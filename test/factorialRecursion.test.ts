import { factorialRecursion } from "../src/recursion";

test("factorialRecursion 4*3*2*1 should be 24", () => {
    expect(factorialRecursion(4)).toEqual(24);
});

test("factorialRecursion 2*1 should be 2", () => {
    expect(factorialRecursion(2)).toEqual(2);
});

test("factorialRecursion 1 should be 1", () => {
    expect(factorialRecursion(1)).toEqual(1);
});

test("factorialRecursion 0 should be 0", () => {
    expect(factorialRecursion(0)).toEqual(0);
});

test("factorialRecursion -7 should be -7", () => {
    expect(factorialRecursion(-7)).toEqual(-7);
});
