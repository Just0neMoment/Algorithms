function solution(rny_string) {
    let result = "";
    if(rny_string.includes("m")){
        result = rny_string.replaceAll("m", "rn")
    } else {
        result = rny_string
    }
    return result
}