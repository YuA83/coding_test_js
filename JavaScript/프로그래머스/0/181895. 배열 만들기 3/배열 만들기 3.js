function solution(arr, intervals) {
    return intervals.reduce((p, [a, b]) => [...p, ...arr.slice(a, b+1)], [])
}