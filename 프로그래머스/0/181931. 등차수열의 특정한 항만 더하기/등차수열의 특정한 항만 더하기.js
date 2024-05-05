function solution(a, d, included) {
    let result = 0;
    let arr  = [];
    arr.push(a)
    for(i=0; i<included.length -1; i++){
        arr.push(arr[arr.length-1] + d)
    }
    for(i=0; i<included.length; i++){
        if(included[i] === true){
            result += arr[i]
        }
    }
    return result
}