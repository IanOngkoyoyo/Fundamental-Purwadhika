class User {
    greeting() {
        console.log('Hello World')
    }
    printData() {
        return 'User Data'
    }
}

const Student = class {
    greeting() {
        console.log('Hello Student')
    }
};

const user = new User()
const student = new Student()

user.greeting()
student.greeting()
console.log(user.printData())

class Admin{
    username = '';
    email = '';
    password = '';

    constructor(_username, _email, _password) {
        this.username = _username
        this.email = _email
        this.password = _password
    }

    displayAdminProfile() {
        return this.username
    }
}

const admin1 = new Admin('Ian', 'Ian@gmail.com', 'Ian12345');
console.log(admin1.displayAdminProfile()) // Ian
console.log(admin1) // Username Ian, email: Ian@email.com, password:ian12345

// ENCAPSILATION
class bankAccount {
    #customerName = '';
    #balance = 0;

    constructor(customerName, balance){
            this.#customerName = customerName; // menambahkan # untuk private data
            this.#balance = balance;
            Object.freeze(this);// Agar tidak bisa mengubah property diluar kelas
    }

    displayData(){
        return this.#customerName;
    }
}
const customer01=new bankAccount('Ian', 10000000000)
console.log(customer01.displayData())
console.log(customer01)