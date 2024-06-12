function solution(A, B) {
//     let a = [...A];
    
//     for (let i = 0; i < a.length; i++) {
//         a.unshift(a.pop());
        
//         if (a.join("") === B) {
//             return i === a.length-1? 0 : i+1;
//         }
//     }
    
//     return -1;
    
    return (B+B).indexOf(A);
}