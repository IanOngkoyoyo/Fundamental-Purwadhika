function findFactorial(num) {
    if(num<0){
        throw new Error('Faktorial tidak bisa untuk angka negatif');
    } if(num === 0 || num === 1){
        return 1
    }
    return num * findFactorial(num-1)
}
console.log(findFactorial(5))