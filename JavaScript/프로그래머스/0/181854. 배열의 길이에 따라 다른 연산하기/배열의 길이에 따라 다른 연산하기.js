function solution(arr, n) {
    let answer = [...arr];
    let i = +!(arr.length % 2);
    
    for (; i < arr.length; i+=2) {
        answer[i] += n;
    }
    
    return answer;
}