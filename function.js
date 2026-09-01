/*
Function 
digunakan untuk menyimpan sebuah kode yang dapat dipanggil berulang kali.
*/

// Function Declaration
function greeting(){
    console.log('Hello User')
}
greeting()
greeting() //Outputnya hello user sebanyak 2x

// Function Expression
const welcome = function(){
    console.log('welcome to my website')
}
welcome()
welcome() //Outputnya welcome to my website sebanyak 2x

// Function Arrow
const text= () =>{
    console.log('ini adalah function arrow')
}
text() //Outputnya adalah 'ini adalah function arrow'

// function with parameter and argument
function greetingUser(name){
    console.log(`Hello ${name}`)
}
greetingUser('John') //Outputnya Hello John

// function scope (function with return)
function printOut(){
    const templateMessage = 'Hello World'
    const bebas = 'abcd'

    return [templateMessage, bebas]
}
const [templateMessage, bebas] = printOut() //object destructuring
console.log(templateMessage) //Outputnya Hello World
console.log(bebas) //Outputnya abcd

// const(templateMessage, bebas) = printOut() //array destructuring
//console.log(templateMessage, bebas) //Outputnya Hello World, abcd

// const [templateMessage, bebas] = printOut() //array destructuring
// console.log(templateMessage, bebas) //Outputnya Hello World, abcd