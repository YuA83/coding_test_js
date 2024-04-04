function solution(n, k) {
    return Array.from({length: n}, () => n--).filter(v => !(v % k)).sort((a,b) => a-b);
}