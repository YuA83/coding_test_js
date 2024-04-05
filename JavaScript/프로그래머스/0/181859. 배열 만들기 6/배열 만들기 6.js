function solution(arr) {
    
    const stk = arr.reduce((p, c, i) => {
        /*
        if (!p.length) return [...p, c];
        else if (p.slice(-1)[0] === c) return p.slice(0, -1);
        else return [...p, c];
        */
        
        return p[p.length-1] !== c? [...p, c] : p.slice(0, -1);
    }, []);
    
    
    return stk.length? stk : [-1];
}