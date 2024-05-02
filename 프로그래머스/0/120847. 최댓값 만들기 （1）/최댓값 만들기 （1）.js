function solution(numbers) {
    let numSort = numbers.sort((a,b) => a-b)
    let lastNum1 = numSort[numSort.length -1]
    let lastNum2 = numSort[numSort.length -2]
    return lastNum1 * lastNum2
}