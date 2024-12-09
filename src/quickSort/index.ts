// find the max N sum of an array
export function quickSort(arr: Array<number>): Array<number> {
    if (arr.length < 2) {
        return arr;
    }

    const smallArr: Array<number> = [];
    const bigArr: Array<number> = [];
    let pivot = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            smallArr.push(arr[i]);
        }
        else if (arr[i] > pivot) {
            bigArr.push(arr[i]);
        }
    }
    return [...quickSort(smallArr), pivot, ...quickSort(bigArr)];
}