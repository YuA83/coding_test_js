function solution(numbers, n) {    
    // return numbers.reduce((p, c) => n < p? p : p+c, 0);
    
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        if (n < sum) break;
    }
    
    return sum;
}