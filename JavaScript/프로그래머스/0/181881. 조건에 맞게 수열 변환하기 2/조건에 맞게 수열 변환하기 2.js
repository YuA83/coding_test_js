function solution(arr) {
    let arrXstr = "";
    let arrX = arr;
    let x = 0;
    
    while(arrXstr !== arrX.join("")) {
        arrXstr = arrX.join("");
        
        arrX = arrX.map(v => {
            if (50 <= v && !(v % 2)) return v/2;
            else if (v < 50 && !!(v % 2)) return 2*v+1;
            else return v;
        });
        
        x++;
    }
    
    return x-1;
}