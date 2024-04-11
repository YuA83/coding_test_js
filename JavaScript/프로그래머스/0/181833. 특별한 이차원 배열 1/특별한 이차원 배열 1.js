function solution(n) {
    return Array(n)
        .fill(0)
        .map((_, i) => Math.pow(2, i)
             .toString(2)
             .padStart(n, 0)
             .split("")
             .map(v => +v))
        .reverse();
}