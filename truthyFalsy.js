/* Truthy or Falsy
Nilai non-boolean yang dikonversikan menjadi boolean
*/

//Ex Falsy
console.log(boolean(''));
console.log(boolean(0));
console.log(boolean(undefined));
console.log(boolean(NaN));
console.log(boolean(null));
// Output diatas akan menghasilkan False

//Ex Truthy
console.log(boolean(' '));
console.log(boolean(1));
console.log(boolean(-1));
console.log(boolean('Hello, World!'));
// Output diatas akan menghasilkan True

// Ex implementasi
const inputUsername = 'Ian Ongkoyoyo';

if (inputUsername) {
  console.log('Valid');
} else {
  console.log('Not Valid');
}
