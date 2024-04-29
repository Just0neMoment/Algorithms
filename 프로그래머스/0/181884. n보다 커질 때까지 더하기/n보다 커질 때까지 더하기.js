function solution(numbers, n) {
    let result = 0;
    for(i=0; i<numbers.length; i++){
        if(result > n){
            return result;
        } else {
            result += numbers[i];
        }
    }
    return result;
}