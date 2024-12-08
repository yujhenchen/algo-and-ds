export function selectionSort(arr: Array<number>) {
    if (arr.length < 2) {
        return arr;
    }

    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        // find the smallest index
        // swap
        let minIdx = findMinIndex(arr.slice(i, arr.length - 1));
        temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
    return arr;
}

function findMinIndex(arr: Array<number>) {
    let idx = 0;
    let min = arr[idx];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            idx = i;
        }
    }
    return idx;
}
