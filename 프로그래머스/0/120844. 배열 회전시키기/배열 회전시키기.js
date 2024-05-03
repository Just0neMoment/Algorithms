function solution(numbers, direction) {
    let result = [];
    if(direction === "right"){
        for(i=0; i<numbers.length-1; i++){
            result.push(numbers[i])
        }
        result.unshift(numbers[numbers.length -1])
    }
    if(direction === "left"){
        for(i=1; i<numbers.length; i++){
            result.push(numbers[i])
        }
        result.push(numbers[0])
    }
    return result;
}