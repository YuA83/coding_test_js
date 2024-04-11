function solution(n) {
    /*
    return Array(n)
        .fill(0)
        .map((_, i) => Math.pow(2, i)
             .toString(2)
             .padStart(n, 0)
             .split("")
             .map(v => +v))
        .reverse();
    */
    
    let arr = Array(n).fill().map(_ => Array(n).fill(0));
    
    for (let i = 0; i < n; i++) {
        arr[i][i] = 1;
    }
    
    return arr;
}