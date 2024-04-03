function solution(arr, queries) {    
    return queries.map(([s, e, k]) => {     
        return [...arr]
            .slice(s, e+1)
            .filter(v => k < v).
        sort((a, b) => a-b)[0] 
        || -1;
    });
    
    // for (const [s, e, k] of queries) {
    //     [...arr]
    // }
}