function solution(num_list) {
//     const x = num_list.reverse().reduce((p, c, i) => i === 1? (p > c? p-c : 2*p) : p);
    
//     num_list.reverse().push(x);
    
//     return num_list;
    
    const [x, y] = [...num_list].reverse();
    
    return [...num_list, x > y? x-y : 2*x];
}