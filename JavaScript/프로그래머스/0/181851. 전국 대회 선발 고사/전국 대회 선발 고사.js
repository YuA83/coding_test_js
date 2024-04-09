function solution(rank, attendance) {
    let arr = [];
    
    attendance.forEach((v, i) => v? arr.push([i, rank[i]]) : "");
    const [a, b, c] = arr.sort((a, b) => a[1]-b[1]);
    
    return 10000*a[0] + 100*b[0] + c[0];
    
    
}