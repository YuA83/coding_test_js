function solution(num_str) {
    return [...num_str].reduce((p, c) => +p + +c);
}