function solution(num_list) {
    return num_list.reduce((p, c) => num_list.length <= 10? p*c : p+c);
}