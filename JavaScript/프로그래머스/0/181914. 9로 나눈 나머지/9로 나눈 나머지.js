function solution(number) {
    const num = [...number].reduce((p, c) => +p + +c);
    return num % 9;
}