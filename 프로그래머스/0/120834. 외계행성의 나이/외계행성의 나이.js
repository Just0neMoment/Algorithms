function solution(age) {
    const alphaMap = "abcdefghij";
    const ageStr = age.toString();
    let result = "";
    for(i=0; i<ageStr.length; i++){
        const num = parseInt(ageStr[i]);
        result += alphaMap[num];
    }

    return result;
}