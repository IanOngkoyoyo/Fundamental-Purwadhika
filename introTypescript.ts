//Variable

let fullName: string ='Ian Ongkoyoyo';
let isGraduated: boolean = true;
let score: number | string =100;
score = 'Graduated'
console.log(fullName)
console.log(isGraduated)
console.log(score)

// FUNCTION

function sum(num1:number, num2:number){
    return num1 + num2
}
sum(10,20)


//ARRAY
const numbers:number[]=[1000, 2000]
const fruits:string[]=['Apple', 'mango', 'dates']
const random:any=[1000, 'apple', true]

//OBJECT
//INTERFACE
interface Student{
    fullName:string;
    age:number
    isGraduated:boolean
}

const student:Student ={
    fullName: 'Ian Ongkoyoyo',
    age:21,
    isGraduated:true
}

//TYPES
type User ={
    username:string,
    password:string,
    email:string
}

const user: User = {
    username:'Ian',
    password:'ian12345',
    email:'ian@email'
}

//ARRAY OF OBJECT
type UserNew = {
    username: string;
    password: string;
    email: string;
    isVerified: boolean;
    phoneNumber?: number;
}

const users : UserNew = {
    username: 'Ian',
    password: 'Ian12345',
    email: 'ian@email.com',
    isVerified: true
}