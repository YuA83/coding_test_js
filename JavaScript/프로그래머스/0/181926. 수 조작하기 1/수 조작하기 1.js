function solution(n, control) {
    const key = {
        "w": 1,
        "s": -1,
        "d": 10,
        "a": -10
    };
    
    return [...control].reduce((p, c) => p + key[c], n);
}