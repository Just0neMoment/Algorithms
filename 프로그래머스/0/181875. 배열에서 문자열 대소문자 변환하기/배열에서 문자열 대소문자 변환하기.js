function solution(strArr) {
    let result = [];
    for(i=0; i<strArr.length; i++){
        if((i+1) % 2 === 0){
            result.push(strArr[i].toUpperCase());
        } else {
            result.push(strArr[i].toLowerCase());
        }
    }
    return result;
}