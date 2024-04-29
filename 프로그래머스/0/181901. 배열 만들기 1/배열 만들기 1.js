function solution(n, k) {
    let arr = Array.from({length:n}, (_,i)=>i+1);
    let result = [];
    for(i=0; i<n; i++){
        if(arr[i] % k === 0){
            result.push(arr[i])
        }
    }
    return result;
}