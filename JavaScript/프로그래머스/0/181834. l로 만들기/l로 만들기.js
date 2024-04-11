function solution(myString) {
    return [...myString].map(v => v.charCodeAt() <= "l".charCodeAt()? "l" : v).join("");
}