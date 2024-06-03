function solution(num, total) {
    // total = (n(2a+(n-1)d))/2
    const a1 = (total *2 /num +1 -num) /2
    
    return Array(num).fill(0).map((v, i) => v + a1 + (1*i));
}