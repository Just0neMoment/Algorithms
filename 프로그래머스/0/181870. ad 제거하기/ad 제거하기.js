function solution(strArr) {
    let result = [];
    for(i=0; i<strArr.length; i++){
        if(!strArr[i].includes("ad")){
            result.push(strArr[i]);
        }
    }
    return result;
}