function solution(strArr) {    
    const len = strArr.reduce((p, c) => {
        p[c.length] = (p[c.length] || 0) + 1;
        return p;
    }, {});
    
    const maxKey = Object.keys(len).reduce((p, c) => {
        // if (len[p] === len[c]) return +p > +c? p : c;
        // else return len[p] > len[c]? p : c;
        
        return len[p] <= len[c]? c : p;
    });
    
    return len[maxKey];
}