function solution(arr) {
    let result;
    const diff = Math.abs(arr.length - arr[0].length);
    
    if (arr.length > arr[0].length) {
        result = arr.map(v => {
            v.push(Array(diff).fill(0));
            return v.flat();
        });
    } else {
        result = arr;
        
        for (let i = 0; i < diff; i++) {
            result.push(Array(result[0].length).fill(0));
        }
    }
    
    return result;
}