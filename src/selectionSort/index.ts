export function selectionSort(arr: Array<number>): Array<number> {
    if (arr.length < 2) {
        return arr;
    }

    let temp = 0;
    let slice: Array<number> | null = null;
    let minIdx = -1;
    for (let i = 0; i < arr.length; i++) {
        // find the smallest index
        // swap
        slice = arr.slice(i, arr.length)
        minIdx = findMinIndex(slice) + i;
        temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;

        // console.log("slice", slice, "minIdx", minIdx, "arr", arr);
    }
    return arr;
}

function findMinIndex(arr: Array<number>) {
    let idx = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[idx]) {
            idx = i;
        }
    }
    // console.log("idx", idx);
    return idx;
}
