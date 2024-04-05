function solution(num_list) {
    return num_list.reduce((p, c) => {
        let x = c;
        
        while (x !== 1) {
            x = !(x % 2)? x/2 : (x-1)/2;
            p++;
        }
        
        return p;
    }, 0);
}