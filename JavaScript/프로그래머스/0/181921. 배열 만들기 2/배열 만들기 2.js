function* generator() {
    let n = 0;
    
    while(1) {
        yield 5 * Number(n.toString(2));
        n++;
    }
}

function solution(l, r) {
    /*
    0   => 5 * 0    => 0
    5   => 5 * 1    => 1
    50  => 5 * 10   => 2
    55  => 5 * 11   => 3
    500 => 5 * 100  => 4
    505 => 5 * 101  => 5
    550 => 5 * 110  => 6
    555 => 5 * 111  => 7
    
    l <= 5 * Number(n.toString(2)) <= r
    */
    
    let answer = [];
    const gen = generator();
    let x = gen.next().value;
    
    do {
        if (l <= x) answer.push(x);
        x = gen.next().value;
    } while(x <= r)
    
    return answer.length? answer : [-1];
}