function solution(arr) {
    let result = arr;
    const rLen = arr.length;
    const cLen = arr[0].length;
    const diff = Math.abs(rLen - cLen);
    
    if (rLen > cLen) {
        result = arr.map(v => {
            v.push(Array(diff).fill(0));
            return v.flat();
        });
    } else {
       
        for (let i = 0; i < diff; i++) {
            result.push(Array(cLen).fill(0));
        }
    }
    
    return result;
}