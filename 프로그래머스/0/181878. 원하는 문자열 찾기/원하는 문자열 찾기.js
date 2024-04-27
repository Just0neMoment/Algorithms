function solution(myString, pat) {
    let strLower = myString.toLowerCase();
    let patLower = pat.toLowerCase();
    if(strLower.includes(patLower)){
        return 1
    } else if(strLower.length < patLower.length ){
        return 0
    } else {
        return 0
    }
}