function solution(arr, queries) {    
    for (const [s, e, k] of queries) {
        arr.forEach((v, i) => {
            if (s <= i && i <= e) arr[i] += +!(i % k);
        });
    }
    
    return arr;
}