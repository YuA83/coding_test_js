function solution(myString, pat) {
    return [...myString]
        .map((_, i) => myString.substr(i, pat.length))
        .filter(v => v === pat).length;
}