function solution(my_string, is_prefix) {
    let prefixLength = is_prefix.length
    let stringSlice = my_string.slice(0, prefixLength)
    if(stringSlice === is_prefix){
        return 1
    } else {
        return 0
    }
}