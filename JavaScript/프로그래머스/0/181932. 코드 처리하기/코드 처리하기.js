function solution(code) {
    let mode = 0;
    let isEven = 1;
    
    return [...code].map((char, idx) => {
        isEven = +!(idx % 2);
        
        if (char === "1") mode = +!mode;
        else return mode^isEven? char : "";
    }).join("") || "EMPTY";
}