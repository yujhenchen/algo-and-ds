// export function same(arr1: Array<number>, arr2: Array<number>): boolean {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     // loop array 1
//     // if arr1[i]*arr1[i] is not in arr2, return false,
//     // else, remove the first found arr1[i]*arr1[i] from arr2
//     let current = 0;
//     let foundIdx = -1;
//     for (let i = 0; i < arr1.length; i++) {
//         current = arr1[i] ** 2;
//         // NOTE: indexOf iterate the entire array
//         foundIdx = arr2.indexOf(current);
//         if (foundIdx === -1) {
//             return false;
//         }
//         arr2.splice(foundIdx, 1);
//     }
//     return true;
// }

export function same(arr1: Array<number>, arr2: Array<number>): boolean {
    if (arr1.length !== arr2.length) {
        return false;
    }
    // create map key: arr[i] ** 2, value: count
    // loop array 1 to update the map

    // loop array 2
    // if cannot find the value in the map using arr2[i] as key, return false
    // else, if count === 1, delete the key value pair; else, decrease the count by 1
    // if map size is larger than 1, return false
    // return true
    const numCountMap = new Map<number, number>();
    let key = 0;
    let foundCount: number | undefined = undefined;
    for (let i = 0; i < arr1.length; i++) {
        key = arr1[i] ** 2;
        foundCount = numCountMap.get(key);
        if (foundCount !== undefined) {
            numCountMap.set(key, foundCount + 1);
        }
        else {
            numCountMap.set(key, 1);
        }
    }
    // console.log(numCountMap)

    for (let i = 0; i < arr2.length; i++) {
        key = arr2[i];
        foundCount = numCountMap.get(key);
        if (foundCount === undefined) {
            return false;
        }
        if (foundCount === 1) {
            numCountMap.delete(key);
        }
        else {
            numCountMap.set(key, foundCount - 1);
        }
    }
    return true;
}
