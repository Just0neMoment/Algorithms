function solution(board, k) {
    let result = 0;
    for(i=0; i<board.length; i++){
        for(j=0; j<board[i].length; j++){
            if(i + j <= k){
                result += board[i][j]
            }
        }
    }
    return result
}