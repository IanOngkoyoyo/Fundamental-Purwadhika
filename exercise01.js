function sortedNumber(arr){
    let lowest = arr[0];
    let highest = arr[0];
    let averagee = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < lowest){
            lowest = arr[i];
        }
        if(arr[i] > highest){
            highest = arr[i];
        }     
        averagee += arr[i];
    }
   

    let average = averagee / arr.length;
    return [lowest, highest, average];
}
console.log(sortedNumber([12, 5, 23, 18, 4, 45, 32]));

function sortedNumber1(arr){
    let sortedArr = arr.sort((a, b) => a-b)
    let lowest1 = sortedArr[0];
    let highest1 = sortedArr[sortedArr.length -1];
    let average1= arr.reduce((a, b) => a + b)
    let average2= average1 / arr.length
    return[lowest1, highest1, average2]
}

console.log(sortedNumber1([12, 5, 23, 18, 4, 45, 32]))