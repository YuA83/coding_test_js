function solution(arr, flag) {
    return arr.reduce((p, c, i) => {
        return flag[i]? 
            p += c.toString().repeat(2*c) : [...p].reverse().slice(c).reverse().join("");
    }, "")
        .split("")
        .map(v => +v);
}