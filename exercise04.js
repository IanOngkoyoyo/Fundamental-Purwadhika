function penjumlahan(arr1, arr2){
    let result = []
    for(let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] + arr2[i])
    }
    return result
}
console.log(penjumlahan([1,2,3],[3,2,1]))