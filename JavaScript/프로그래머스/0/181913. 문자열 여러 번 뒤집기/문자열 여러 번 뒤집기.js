function solution(my_string, queries) {
    let answer = my_string;
    
    for (const [s, e] of queries) {
        const sStr = answer.substr(0, s);
        const eStr = answer.substr(e+1);
        const rStr = [...answer.slice(s, e+1)].reverse().join("");
        
        answer = sStr + rStr + eStr;
    }
    
    return answer;
}