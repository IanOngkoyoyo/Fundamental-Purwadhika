/* Logical Operator
Digunakan untuk mengkombinasikan lebih dari 1 kondisi

And(&&)
-Apabila salah satu kondisi bernilai false, hasil akhir akan false
-Apabila ingin output akhir true maka semua kondisi harus true

Or(||)
-Apabila salah satu kondisi true maka hasil akhir akan true
-Apabila ingin output akhir false maka semua kondisi harus false

Not(!)
-Negasi/kebalikan Mengubah hasil true/ false menjadi sebaliknya
*/

console.log(100 > 100 && 1 != '1'); // false && false -> false
console.log(100 >= 100 && 1 == '1' && 'abc' === 'ABC');// true && true && false -> false
console.log(100 >= 100 && 'bca' === 'bca' && 1 === 1);// true && true && true -> true

console.log(100 > 100 || 1 != '1');// false || false -> false
console.log(100 >= 100 || 1 == '1' || 'abc' ==='ABC');//true || true || false -> true

console.log(!(100 >= 100));// true -> false
console.log(!(100 >= 100 && 1 ==='1'));// true && false -> false -> true