export function getMaxSumSubArray(arr: Array<number>): number {
    // if all numbers are negative, return 0
    let tempSum = 0;
    let maxSum = 0;
    for (let num of arr) {
        if (num <= 0) {
            if (tempSum > maxSum) {
                maxSum = tempSum;
            }
            tempSum = 0;
        }
        else {
            tempSum += num;
        }
        // console.log(tempSum);
    }

    if (tempSum > maxSum) {
        maxSum = tempSum;
    }
    return maxSum;
}
