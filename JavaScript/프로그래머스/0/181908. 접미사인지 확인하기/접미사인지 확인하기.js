function solution(my_string, is_suffix) {
    return +([...my_string].map((_, idx) => my_string.substr(idx)).includes(is_suffix));
}