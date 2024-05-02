function solution(arr, n) {
    let result = [];
    for(i=0; i<arr.length; i++){
        if(arr.length % 2 === 0){
            if(i % 2 === 0){
                result.push(arr[i])
            } else {
                result.push(arr[i] + n)
            }
        } else {
            if(i % 2 !== 0){
                result.push(arr[i])
            } else {
                result.push(arr[i] + n)
            }
        }
    }
    return result;
}