function solution(a, d, included) {
    return included.reduce((pre, cur, idx) => {
        return cur? pre + a + idx*d : pre;
    }, 0);
}