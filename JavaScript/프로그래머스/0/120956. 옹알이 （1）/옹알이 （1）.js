function solution(babbling) {
    let answer = 0;
    const ables = ["aya", "ye", "woo", "ma"];
    
    
    for (let text of babbling) {
        for (const able of ables) {
            text = text.replace(able, " ");
        }
        
        text = text.replaceAll(" ", "");
        answer += !!text.length? 0 :1;
    }
    
    return answer;
}