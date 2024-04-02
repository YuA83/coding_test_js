function solution(a, b, c) {
    const dice = new Set([a, b, c]);
    const sum = n => (a**n + b**n + c**n);
    
    switch(dice.size) {
        case 1: return sum(1) * sum(2) * sum(3);
        case 2: return sum(1) * sum(2);
        case 3: return sum(1);
    }
}