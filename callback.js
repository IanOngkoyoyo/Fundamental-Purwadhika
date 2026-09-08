// Callback = function yang dijadikan argumen oleh function lain

// Indirect function
function sum(num1, num2, callback){
    const result = num1 + num2;
    return callback(result);
}

function output(result){
    console.log(result)
}

sum(10, 30, output);

// Direct callback

function sum(num1, num2, callback){
    const result = num1 + num2;
    return callback(result)
}
 sum(10, 30, (result) => {
    console.log(result)
 });

 //. map 
 const fruits = ['Apel']
 fruits.map((item, index) => {
    console.log(item, index)
 });




 {
    const fruits = ['apel', 'nanas', 'jeruk'];
        

    function Delete(){
        setTimeout(() => {
            fruits.pop();
            return callback();
        }, 3000);
    }

    function get(){
        setTimeout(() =>{
            console.log(fruits);
        }, 1000);
    }
    delete(() => delete(get))

 }