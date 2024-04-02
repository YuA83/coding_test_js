function solution(n) {
    let sum = 0;
    
    if (!(n % 2)) {
        for (let i = n; i > 1; i-=2) sum += i**2;
    } else sum = ((n+1)/2)**2;
    
    
    return sum; 
}