function solution(num_list) {
    return num_list.length <= 10? num_list.reduce((p, c) => p*c) : num_list.reduce((p, c) => p+c);
}