function solution(str_list) {
    const x = str_list.indexOf("l");
    const y = str_list.indexOf("r");
    
    
    if (x === -1 && y === -1) {
        return [];
    } else if (x === -1) {
        return str_list.filter((_, i) => y < i);
    } else if (y === -1) {
        return str_list.filter((_, i) => i < x);
    } else {
        return str_list.filter((_, i) => x < y? i < x : y < i);
    }
}