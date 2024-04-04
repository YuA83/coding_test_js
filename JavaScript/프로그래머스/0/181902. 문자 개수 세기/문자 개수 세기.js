function solution(my_string) {
   
    let answer = Array.from({length: 52}, () => 0);
    
    const {upper, lower} =  [...my_string].reduce((p, c) => {
        const {upper, lower} = p;
        
        if (c === c.toUpperCase()) upper.push(c.charCodeAt());
        else lower.push(c.charCodeAt());
        
        return {upper, lower};
    }, {upper: [], lower: []});
    
    upper.forEach(v => answer[v-"A".charCodeAt()] += 1);
    lower.forEach(v => answer[v-"a".charCodeAt()+26] += 1);
    
    return answer;
    
}