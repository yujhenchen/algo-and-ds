// multiple pointers

// take a sorted array, and return the first pair that sum to 0
export function sumZero(arr: Array<number>): Array<number> {
    // return empty array when the arr length < 2
    // while start is smaller than end
    // if arr[start] + arr[end] === 0, return [arr[start], arr[end] ] when
    // if arr[start] + arr[end] > 0, end--
    // else start++
    if (arr.length < 2) {
        return [];
    }
    let start = 0;
    let end = arr.length - 1;
    let first = 0, second = 0;
    while (start < end) {
        first = arr[start];
        second = arr[end];
        if (first + second === 0) {
            return [first, second];
        }
        if (first + second > 0) {
            end--;
        }
        else {
            start++
        }
    }
    return [];
}

// pass a sorted array, and return the count of unique values
export function countUniqueValues(arr: Array<number>): number {
    // return array length if the arr length < 2
    // loop the array, if previous !== current, count++, previous = current, else  current ++
    if (arr.length < 2) {
        return arr.length;
    }
    let count = 1;
    let prev = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (prev !== arr[i]) {
            count++;
            prev = arr[i];
        }
    }
    return count;
}
