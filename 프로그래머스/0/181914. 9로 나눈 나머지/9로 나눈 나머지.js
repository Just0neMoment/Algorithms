function solution(number) {
    let arr = number.split("");
    let newArr = arr.map(Number)
    let num = 0;
    for(i=0; i<newArr.length; i++){
        num += newArr[i]
    }
    return num % 9
}