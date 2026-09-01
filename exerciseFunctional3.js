function noOdd(N){
    for(let i = 1; i <=N; i++){
        if(i === 1) continue;
        else if(i % 2 === 0){
            console.log(i);
        }
    }
}

noOdd(20)