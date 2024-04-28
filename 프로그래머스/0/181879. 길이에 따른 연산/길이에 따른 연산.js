function solution(num_list) {
    let result = 0;
    if(num_list.length > 10){
        for(i=0; i<num_list.length; i++){
            result += num_list[i];
        }
    } else if(num_list.length < 11){
        result = 1;
        for(j=0; j<num_list.length; j++){
            result *= num_list[j];
        }
    }
    return result;
}