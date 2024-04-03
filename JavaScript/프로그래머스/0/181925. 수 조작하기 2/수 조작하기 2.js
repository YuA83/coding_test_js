function solution(numLog) {
    let answer = [];
    const key = {
        "1": "w",
        "-1": "s",
        "10": "d",
        "-10": "a"
    };
    
    numLog.reverse().reduce((p, c, i) => {
        if (i !== 0) answer.push(key[(p-c).toString()]);
        return c;
    }, 0);
    
    return answer.reverse().join("");
}