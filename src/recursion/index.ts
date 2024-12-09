export function factorialRecursion(num: number): number {
    if (num <= 1) {
        return num;
    }
    return num * factorialRecursion(num - 1)
}
