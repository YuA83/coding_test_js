function solution(intStrs, k, s, l) {
    return intStrs
        // .map(str => k < +str.slice(s, s+l) ? +str.slice(s, s+l) : k)
        // .filter(v => v !== k);
        .map(str => +str.slice(s, s+l))
        .filter(v => v > k);
}