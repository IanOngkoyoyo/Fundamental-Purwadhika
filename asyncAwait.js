const apparels = ['kelme', 'adidas'];

const deleteData = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            if (apparels.length === 0) {
                return reject('apparels Data is empty')
            }
            apparels.pop();
            return resolve(apparels);
        }, 3000)
    });
};

const getData = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (apparels.length === 0){
                return reject ('Apparels empty')
            }

            return resolve(apparels)
        }, 1000)
    })
}

async function main(){
    try{
        for(let i=1; i<=2; i++){
            const res = await deleteData();
            console.log(res)
    }
    const res2 = await getData();
    console.log(res2);
} catch (error) {
    console.log('Error:')
    console.log(error);
    }
}

main()