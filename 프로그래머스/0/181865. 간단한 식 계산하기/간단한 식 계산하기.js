function solution(binomial) {
    const bimSplit = binomial.split(' ');
    const a = parseInt(bimSplit[0], 10);
    const operator = bimSplit[1];
    const b = parseInt(bimSplit[2], 10);
    
    if(operator === "+"){
        return a + b
    }
    if(operator === "-"){
        return a - b
    }
    if(operator === "*"){
        return a * b
    }
    
}