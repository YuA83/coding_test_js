function solution(str_list) {
    // const x = str_list.indexOf("l");
    // const y = str_list.indexOf("r");
    
    // if (x === -1 && y === -1) return [];
    // else return str_list.filter((_, i) => x < y || y === -1 ? i < x : y < i);
    
    for (let i = 0; i < str_list.length; i++) {
        if (str_list[i] === "l") return str_list.slice(0, i);
        if (str_list[i] === "r") return str_list.slice(i+1);
    }
    
    return [];
}