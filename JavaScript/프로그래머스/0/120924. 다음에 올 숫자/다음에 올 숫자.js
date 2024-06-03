function solution(common) {
    // const len = common.length -1;
    const [x, y, z] = common;
    
    // return (y-x) === (z-y)? common[len] + (y-x) : common[len] * (y/x);
    return (y-x) === (z-y)? common.pop() + (y-x) : common.pop() * (y/x)
}