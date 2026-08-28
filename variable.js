let firstname = 'Ian'
let lastname = 'Ongkoyoyo'
console.log(firstname, lastname);

// Variable Naming Rules
// 1. Tidak boleh ambigu dalam menamakan variable
// 2. Tidak boleh ada spasi dalam menamakan variable
// 3. Nama variable tidak boleh diawali dengan angka dan spesial karakter kecuali _ dan $
// 4. Tidak bisa membuat nama variable dengan syntax javascript

// Perbedaan penggunaan var, let, dan const

/* 
                                          var  let  const
nama variable boleh duplikat.              V    X     X
data variable boleh diubah                 V    V     X
apakah variable memiliki aturan scope?     X    V     V
*/

/* jika terdapat variable dengan nama yang sama,
 maka variable terakhir yang akan digunakan karena variable memliki global scope. 
 namun jika memnggunakan let atau const maka akan error karena menggunakan 
 block scope */