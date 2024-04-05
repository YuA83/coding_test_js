function solution(num_list) {
    // const ne = num_list.filter(v => v < 0);
    // return num_list.indexOf(ne[0]);
    
    return num_list.findIndex(v => v < 0);
}