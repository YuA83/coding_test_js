function cal(arr) {
    return [arr.length, arr.reduce((p, c) => p+c)];
}

function solution(arr1, arr2) {
    const [len1, sum1] = cal(arr1);
    const [len2, sum2] = cal(arr2);
    
    if (len1 !== len2) return len1 > len2? 1 : -1;
    else if (sum1 === sum2) return 0;
    else return sum1 > sum2? 1 : -1;
}