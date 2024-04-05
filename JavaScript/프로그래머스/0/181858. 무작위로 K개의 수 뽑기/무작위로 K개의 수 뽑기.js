function solution(arr, k) {
    let answer = [];
    const arrSet = new Set(arr);
    
    for (const setItem of arrSet) answer.push(setItem);
    
    return answer.length < k? [...answer, ...Array(k-answer.length).fill(-1)] : answer.slice(0, k);
}