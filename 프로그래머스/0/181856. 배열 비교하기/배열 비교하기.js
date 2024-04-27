function solution(arr1, arr2) {
    if(arr1.length > arr2.length){
        return 1
    } else if(arr1.length < arr2.length){
        return -1
    } else {
        let arr1Plus = arr1.reduce((a,b) => (a+b))
        let arr2Plus = arr2.reduce((a,b) => (a+b))
        if(arr1Plus > arr2Plus){
            return 1
        } else if(arr1Plus === arr2Plus) {
            return 0
        } else {
            return -1
        }
    }
}