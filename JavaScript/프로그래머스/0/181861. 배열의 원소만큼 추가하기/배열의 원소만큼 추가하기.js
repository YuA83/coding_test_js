function solution(arr) {
    // return [...arr.map(v => v.toString().repeat(v)).join("")].map(v => +v);
    
    let X = [];
    
    arr.forEach(v => {
        for (let i = 0; i < v; i++) 
            X.push(v);
    });
    
    return X;
}