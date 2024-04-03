function solution(a, b, c, d) {
    const dise = [a, b, c, d];
    const cnt = {};
    
    for (const n of dise) {
        cnt[n] = (cnt[n] || 0) + 1;
    }
    
    const keys = Object.keys(cnt);
    
    switch(keys.length) {
        case 1: return 1111*keys[0];
        case 2: 
            if (Object.values(cnt).includes(3))
                return cnt[keys[0]] === 3? 
                    (10*keys[0] + +keys[1])**2 : (10*keys[1] + +keys[0])**2;
            else return (+keys[0] + +keys[1]) * Math.abs(keys[0] - keys[1]);
        case 3: 
            let x = 1;
            for (const [k,v] of Object.entries(cnt))
                if (v !== 2) x*=k;
            return x;
        case 4: return Number(keys.sort()[0]);
    }
}