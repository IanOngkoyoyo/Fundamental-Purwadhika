const fruits01 = ['mango', 'pineapple', 'orange'];
const fruits02 = [...fruits01]; // ... spread operator
const fruits03 = fruits01; // Copy by reference

fruits02[1] = 'Banana';
fruits03[1] = 'apple';

console.log(fruits01);
console.log(fruits02);
console.log(fruits03);
