function solution(my_string) {
    let num = my_string.match(/\d/g);
    let newNum = num.map(Number);
    console.log(newNum)
    let result = 0;
    for(i=0; i<newNum.length; i++){
        result += newNum[i]
    }
    return result;
}