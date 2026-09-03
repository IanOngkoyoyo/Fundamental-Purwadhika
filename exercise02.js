function fruits(arr){
    let result = arr.slice(0, -1).join(',') + ', and ' + arr[arr.length - 1]
    return result
}
console.log(fruits(['apple', 'banana', 'cherry', 'date']))
