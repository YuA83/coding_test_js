function solution(my_string, m, c) {
//     let arr = [];   
    
//     for (let i = 0; i <= my_string.length/m; i++) {
//         arr.push(my_string.substr(i*m, m));
//     }
    
    
//     return arr.map(v => v.substr(c-1, 1)).join("");
    
    return [...my_string].filter((_, i) => i % m === c-1).join("");
}