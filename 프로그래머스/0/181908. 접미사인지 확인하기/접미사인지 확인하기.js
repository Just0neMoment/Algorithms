function solution(my_string, is_suffix) {
    const suffixLength = is_suffix.length;
    const stringLength = my_string.length;
    if(stringLength < suffixLength){
        return 0
    }
    
    
    const stringSlice = my_string.slice(stringLength - suffixLength, stringLength)
    if(stringSlice === is_suffix){
        return 1
    } else {
        return 0
    }
}