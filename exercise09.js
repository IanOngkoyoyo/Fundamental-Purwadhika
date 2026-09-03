function duplication(arr) {
    let result = []
    for(let i=0;i<arr.length;i++){
        let count=0
        for(let j=0; j<arr.length; j++){
            if(arr[i] === arr[j]) count++
        }
        if(count > 1 && !result.includes(arr[i]))
            result.push(arr[i])
    }
    return result
}
console.log(duplication([1, 2, 2, 2, 3, 3, 4, 5, 5]))