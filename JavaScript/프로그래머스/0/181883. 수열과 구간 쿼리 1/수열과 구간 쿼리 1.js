function solution(arr, queries) {
    return queries.reduce((p, [s, e]) => p.map((v, i) => s<=i && i<=e? v+=1 : v), [...arr]);
}