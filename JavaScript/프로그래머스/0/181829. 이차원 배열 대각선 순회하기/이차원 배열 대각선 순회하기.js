function solution(board, k) {
    let answer = 0;
    
    for (let i = 0; i < board.length; i++) {
        answer += board[i].filter((v, j) => i+j <= k).reduce((c, p) => p+c, 0);
    }
    
    return answer;
}