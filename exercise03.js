function secondSmaller(arr){
    let sorted = arr.sort((a, b) => a - b)
    return sorted[0]
}
console.log(secondSmaller([5, 3, 1, 7, 2, 6]))