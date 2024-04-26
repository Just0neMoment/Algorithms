function solution(rsp) {
    let myrsp = [];
    let rspSplit = rsp.split("");
    for(i=0; i<rspSplit.length; i++){
        if(rspSplit[i] === "0"){
            myrsp.push("5")
        }
        if(rspSplit[i] === "2"){
            myrsp.push("0")
        }
        if(rspSplit[i] === "5"){
            myrsp.push("2")
        }
    }
    let myrspResult = myrsp.join("");
    return myrspResult;
}