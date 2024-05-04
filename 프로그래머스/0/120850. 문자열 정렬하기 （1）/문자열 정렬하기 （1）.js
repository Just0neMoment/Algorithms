function solution(my_string) {
    let result = [];
    let num = my_string.replace(/\D/g, '');
    let arr = num.split("").sort((a,b)=>a-b).map(Number);
    return arr
}