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