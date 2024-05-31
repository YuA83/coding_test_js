function solution(arr) {
    let answer = true;
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            answer &&= (arr[i][j] === arr[j][i]);
        }
    }
    
    return +answer;
}