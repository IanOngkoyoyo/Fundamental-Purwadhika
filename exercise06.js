function mixedArray(arr){
    let zero = 0
    for (let i = 0; i < arr.length; i++){
         if (typeof arr[i] !== 'number'){ continue
         }else {
            zero += arr[i]
        }
    }
    
    return zero
}
console.log(mixedArray(["3", 1, "string", null, false, undefined, 2]))