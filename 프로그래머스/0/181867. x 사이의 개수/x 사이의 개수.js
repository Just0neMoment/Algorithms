function solution(myString) {
    let result = []
    const split = myString.split('x');
    for(i=0; i<split.length; i++){
        result.push(split[i].length)
    }
    return result;
}