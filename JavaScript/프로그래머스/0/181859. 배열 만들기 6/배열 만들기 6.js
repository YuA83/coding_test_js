function solution(arr) {
    
    const stk = arr.reduce((p, c, i) => {
        if (!p.length) return [...p, c];
        else if (p.slice(-1)[0] === c) return p.slice(0, -1);
        else return [...p, c];
    }, []);
    
    return stk.length? stk : [-1];
}