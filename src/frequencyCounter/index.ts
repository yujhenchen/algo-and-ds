export function same(arr1: Array<number>, arr2: Array<number>): boolean {
    if (arr1.length !== arr2.length) {
        return false;
    }
    // loop array 1
    // if arr1[i]*arr1[i] is not in arr2, return false,
    // else, remove the first found arr1[i]*arr1[i] from arr2
    let current = 0;
    let foundIdx = -1;
    for (let i = 0; i < arr1.length; i++) {
        current = arr1[i] ** 2;
        foundIdx = arr2.indexOf(current);
        if (foundIdx === -1) {
            return false;
        }
        arr2.splice(foundIdx, 1);
    }
    return true;
}
