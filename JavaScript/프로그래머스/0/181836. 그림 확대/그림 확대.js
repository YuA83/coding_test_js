function solution(picture, k) {
    return picture
        .map(item => Array(k).fill([...item].map(char => char.repeat(k)).join("")))
        .flat();
}