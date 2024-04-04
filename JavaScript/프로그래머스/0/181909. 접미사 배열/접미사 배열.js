function solution(my_string) {
    const len = my_string.length;
    let answer = [];
    
    for (let i = 0; i < len; i++)
        answer.push(my_string.slice(-(len-i)));
    
    return answer.sort();
}