function solution(arr) {
    let stk = [];
//     let i = 0;
    
//     while (i < arr.length) {
//         if (!stk.length) {
//             stk.push(arr[i]);
//             i += 1;
//         }
//         if (stk.length && stk[stk.length - 1] < arr[i]) {
//             stk.push(arr[i]);
//             i += 1;
//         }
//         if (stk.length && stk[stk.length - 1] >= arr[i]) {
//             stk.pop();
//             continue;
//         }
//     }
    
    for (let i = 0; i < arr.length; i++) {
        if (!stk.length) stk.push(arr[i]);
        else if (stk.slice(-1)[0] < arr[i]) stk.push(arr[i]);
        else {
            stk.pop();
            i--;
        }
    }
    
    return stk;
}