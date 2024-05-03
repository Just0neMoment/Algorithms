function solution(num, k) {
    let str = String(num)
    let arr = Array.from(str)
    let newArr = arr.map(Number)
    if(newArr.includes(k)){
        return newArr.indexOf(k)+1
    } else {
        return -1
    }
}