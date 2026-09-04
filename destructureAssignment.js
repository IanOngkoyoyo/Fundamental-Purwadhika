const fruits = ['mango', 'apple']
const [fruits1, fruits2] = fruits;
console.log(fruits1)
console.log(fruits2)

const student = {
    fullName: 'Ian Ongkoyoyo',
    hobby: 'coding',
    address: 'BSD'
};

const { hobby, fullName, address} = student;
console.log(fullName);
console.log(hobby);
console.log(address);
console.log(student)