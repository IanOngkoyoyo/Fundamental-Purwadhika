const user = {
    userName: 'Ian',
    password: 'Ian123',
    isVerified: true
}

const profile = new Object();
profile.fullName ='Ian Ongkoyoyo'
profile.addres ='makassar'

console.log(user)
console.log(profile)

//CRUD (Create Read Update Delete)

const student ={
    name : 'Riky',
    class: 'Web Development'
}

//Update
student.phone ='08222333444'
console.log(student)

//Read
console.log(student.name)

//Delete
delete student.name;
delete student.phone;
console.log(student)


const car={
    brand: 'Honda',
    type:'Civic'
}

car['brand'];
car['type'] = 'Jazz';
delete car['brand'];
console.log(car)

//Optional Chaining
const admin ={
    userName: 'Admin01',
    password: 'abc123'
}
// console.log(admin.address.province) Error!!
console.log(admin?.address?.province) //Undefined but not error

// for in loop 
const product ={
    name: 'Indomie',
    price: 3000,
    weigth: 150
}

for(let key in product){
    console.log(key);
    console.log(product[key])
}