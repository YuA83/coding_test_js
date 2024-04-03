function solution(n) {
    let m = n;
    var answer = [m];
    
    do {
        m = !(m % 2)? m/2 : 3*m+1;
        answer.push(m);
    } while(m !== 1);
    
    return answer;
}