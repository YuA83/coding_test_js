function solution(myString) {
    // return [...myString].map(v => v.charCodeAt() <= "l".charCodeAt()? "l" : v).join("");
    return [...myString].map(v => v < "l"? "l" : v).join("");
}