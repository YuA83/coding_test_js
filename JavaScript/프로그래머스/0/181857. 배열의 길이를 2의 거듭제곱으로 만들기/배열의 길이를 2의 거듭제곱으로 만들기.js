function solution(arr) {
    let x = 0;
    
    for (let i = 0; x < arr.length; i++) {
        x = Math.pow(2, i);
    }
    
    return arr.length === x? arr : [...arr, ...Array(x-arr.length).fill(0)];
}