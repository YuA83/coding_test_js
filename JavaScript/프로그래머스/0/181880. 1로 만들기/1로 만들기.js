function solution(num_list) {
    /*    
    return num_list.reduce((p, c) => {
        let x = c;
        
        while (x !== 1) {
            x = !(x % 2)? x/2 : (x-1)/2;
            p++;
        }
        
        return p;
    }, 0);
    */
    
    /*
    12  => 1100 => 4 => 3
    4   => 0100 => 3 => 2
    15  => 1111 => 4 => 3
    1   => 0001 => 1 => 0
    14  => 1110 => 4 => 3
    */
    
    return num_list.reduce((p, c) => p + c.toString(2).length -1, 0);
}