function solution(num_list) {
    const even = num_list.map(v => !(v % 2)? v : "").join("");
    const odd = num_list.map(v => !(v % 2)? "" : v).join("");
     return +even + +odd;
}