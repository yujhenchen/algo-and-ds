import { bubbleSort } from "../src/bubbleSort";

test("sorted should be correct", () => {
    expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
});
