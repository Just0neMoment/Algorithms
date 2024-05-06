function solution(arr, flag) {
    let result = [];
    for(i=0; i<arr.length; i++){
        if(flag[i] === true){
            for(j=0; j<arr[i]*2; j++){
                result.push(arr[i])
            }
        }
        if(flag[i] === false){
            for(j=0; j<arr[i]; j++){
                result.pop(arr[i])
            }
        }
    }
    return result;
}