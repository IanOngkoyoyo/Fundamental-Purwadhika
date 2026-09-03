function adding(arr, newNumber){
    if (!arr.includes(newNumber))
        arr.push(newNumber)
    return arr
}
console.log(adding([1,2,3], 3))
console.log(adding([1,2,3], 5))