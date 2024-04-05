function solution(arr, query) {
    return query.reduce((p, c, i) => !(i % 2)? p.splice(0, c+1) : p.splice(c), [...arr]);
}