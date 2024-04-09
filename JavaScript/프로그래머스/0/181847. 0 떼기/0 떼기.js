function solution(n_str) {
//     let arr = [...n_str];
    
//     for (const v of n_str) {
//         if (v !== "0") break;
        
//         arr.shift();
//     }
    
//     return arr.join("");
    
    return String(+n_str);
}