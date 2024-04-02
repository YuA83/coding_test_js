function solution(num_list) {
    const x = num_list.reduce((p, c) => p*c);
    const y = num_list.reduce((p, c) => p+c);
    
    return +(x < Math.pow(y, 2));
}