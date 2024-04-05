function solution(myStr) {
    const arr = myStr.replaceAll("a", " ").replaceAll("b", " ").replaceAll("c", " ")
        .split(" ")
        .filter(v => v);
    
    return arr.length? arr : ["EMPTY"];
}