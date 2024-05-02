function solution(num_str) {
    let result = 0;
    for(i=0; i<num_str.length; i++){
        result += Number(num_str[i])
    }
    return result
}