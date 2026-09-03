function number(maxSize , arr){
    let result=[]
    for(i=0;i<arr.length;i++){
        if (result.length >= maxSize){
            break;
        } 
    result.push(arr[i])
    }
    return result
}
console.log(number(5 , [5, 10, 24, 3, 6, 7, 8,]))