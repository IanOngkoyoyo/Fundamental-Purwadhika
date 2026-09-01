//For
const brands =['nike', 'adidas', 'puma', 'asics']
for (let i = 0; i < brands.length; i++){
    console.log(brands[i]) // outputnya semua yang ada di array brands
}
 
// for of
for (let bebas of brands){
    console.log(bebas) // outputnya semua yang ada di array brands fixed
}

//continue dan break
for (let i = 0; i < 5; i++){
    if(i === 3) continue // angka 3 akan terskip
}

for (let i = 0; i <5; i++){
    if(i===3) break // angka 3 akan menjadi batasan loop dan output hanya sampai 2
}

//.for each
const fruits = ['apple', 'banana', 'cherry']
fruits.forEach(function(fruit, index){
    console.log(index, fruit) // outputnya semua yang ada di array fruits beserta indexnya
})

//.map
const newFruits = fruits.map(function(item, index){
    return 'nama buah: ' + item + ' index ke: ' + index
})
console.log(newFruits) // outputnya semua yang ada di array fruits beserta 'nama buah dan index keberapa

//.filter 
const filteredFruits = fruits.filter(function(item){
    return item === 'banana' // outputnya hanya banana
})
console.log(filteredFruits)