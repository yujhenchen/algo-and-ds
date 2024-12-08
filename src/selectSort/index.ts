function selectSort() {

}

function findMinIndex(arr: Array<number>) {
    let idx = 0;
    let min = arr[idx];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            idx = i
        }
    }
    return idx;
}
