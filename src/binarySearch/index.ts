export function binarySearch(nums: Array<number>, target: number): number | null {
    if (nums.length === 0) {
        return null;
    }
    // start = nums[0], end = mums[len -1], mid = nums[Math.floor(len of nums / 2)]
    // loop when end >= start
    // if mid === target, return mid
    // if mid > target, end = mid, mid = (end - start) / 2
    let start = 0
    let end = nums.length - 1
    let mid = 0
    let current = 0
    while (end >= start) {
        mid = Math.floor((end + start) / 2)
        current = nums[mid]
        if (current === target) {
            return mid;
        }
        if (current > target) {
            end = mid - 1;
        }
        else if (current < target) {
            start = mid + 1;
        }
    }
    return null;
}
