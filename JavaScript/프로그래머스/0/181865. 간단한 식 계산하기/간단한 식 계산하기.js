function solution(binomial) {
    const [a, op, b] = binomial.split(" ");
    const caculation = {
        "+": +a + +b,
        "-": +a - +b,
        "*": +a * +b,
    };
    
    return caculation[op];
}