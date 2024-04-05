function solution(num_list) {
    const {odd, even} = num_list.reduce(({odd, even}, c, i) => {
        !(i % 2)? odd+=c : even+=c;
        
        return {odd, even};
    }, {odd: 0, even: 0});
    
    return Math.max(odd, even);
}