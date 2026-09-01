function BMI(Weight, Height){
    let result = Weight/(Height*Height);
    if(result < 18.5){;
        return 'less weight'
    } else if(result >= 18.5 && result <= 24.9){
        return'Ideal'
    } else if(result >= 25 && result <= 29.9){
        return 'Overweight'
    } else if(result >= 30 && result <= 39.9){
        return 'Very Overweight'
    } else if(result >= 40){
        return 'Obese'
    }
}

console.log(BMI(52, 1.76))