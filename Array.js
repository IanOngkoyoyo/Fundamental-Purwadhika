/*
Array
Struktur data untuk menyimpan lebih dari 1 data dalam 1 variable

Array adalah struktur data yang digunakan untuk menyimpan lebih dari satu nilai dalam satu variabel. 
 Setiap nilai dalam array memiliki indeks yang dimulai dari 0. Array dapat menyimpan berbagai tipe data, 
termasuk angka, string, objek, dan bahkan array lainnya.
*/

// CRUD(Create, Read, Update, Delete)

//Create
const firstArray =[1, 2, 3, 4, 5,]
const secondArray = new Array(6, 7, 8, 9, 10)
console.log(firstArray)
console.log(secondArray)

//Read
console.log(firstArray[0]) // 1
console.log(secondArray[2]) // 8

//Update
firstArray[0] = 10
console.log(firstArray) // [10, 2, 3, 4, 5]

//Delete
delete firstArray[0]
console.log(firstArray) // [empty, 2, 3, 4, 5]

// Array Methods

//.lenght
const fruits = ['apple', 'banana', 'cherry']
console.log(fruits.length) // 3

//.slice Memotong array dan mengembalikan array baru
const slicedFruits = fruits.slice(0, 2)
console.log(slicedFruits) // ['apple', 'banana']

//.push dan .unshift
fruits.push('pear') // menambahkan elemen di akhir array
fuits.unshift('mango') // menambahkan elemen di awal array
console.log(fruits) // ['mango', 'apple', 'banana', 'cherry', 'pear']

//.pop dan .shift
fruits.pop() // menghapus elemen terakhir array
fruits.shift() // menghapus elemen pertama array
console.log(fruits) // ['apple', 'banana', 'cherry']

//.splice
fruits.splice(1, 1, 'grape') // menghapus 1 elemen dari index 1 dan menambahkan 'grape'
console.log(fruits) // ['apple', 'grape', 'cherry']