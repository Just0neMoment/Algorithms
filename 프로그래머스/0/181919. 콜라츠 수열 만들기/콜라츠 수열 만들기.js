function solution(n) {
    let result = [];
    result.push(n)
    for(i=0; i<n+1; i++){
        if(result[result.length-1] % 2 === 0){
            result.push(result[result.length-1] / 2)
        }
        
        if(result[result.length-1] === 1){
            return result
        }
        
        if(result[result.length-1] % 2 !== 0){
            result.push(3 * result[result.length-1] + 1)
        }
    }
}