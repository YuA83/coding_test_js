function solution(arr) {
    return arr.map((v, i) => {
        if (50 <= v && !(v % 2)) return v/2;
        else if (v < 50 && !!(v % 2)) return 2*v;
        else return v;
    });
}