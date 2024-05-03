function solution(myString) {
    let result = myString.split("x").filter(s => s !== "").sort();
    return result;
}
