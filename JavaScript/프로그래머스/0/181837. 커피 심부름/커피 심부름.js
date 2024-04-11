function solution(order) {
    return order.reduce((p, c) => c.includes("cafelatte")? p+5000 : p+4500, 0);
}