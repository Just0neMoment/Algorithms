function solution(num_list) {
    for(i=0; i<num_list.length; i++){
        if(num_list[i] < 0){
            return num_list.indexOf(num_list[i])
        }
    }
    return -1
}