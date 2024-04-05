function solution(arr) {
    const sIdx = arr.indexOf(2);
    const eIdx = arr.lastIndexOf(2);
    
    return sIdx === -1? [-1] : arr.slice(sIdx, eIdx+1);
}