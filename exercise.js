// SOAL NOMOR 1

let length1 = 5
let width1 = 3
let rectangleArea = length1 * width1
console.log(rectangleArea)



//SOAL NOMOR 2

let length2 = 5
let width2 = 3
let perimeterRectangle = 2 * (length2 + width2)
console.log(perimeterRectangle)



//SOAL NOMOR 3

let radius = 5
let diameterOfCircle = 2 * radius
let circumferenceOfCircle = 2 * Math.PI * radius
let areaOfCircle = Math.PI * radius * radius
console.log(diameterOfCircle, circumferenceOfCircle, areaOfCircle)
let angleA = 80
let angleB = 65
let angleC = 180 - (angleA + angleB)
console.log(angleC)



//SOAL NOMOR 4

let year = 365
let month = 30
let days = 1
console.log(Math.floor(400 / year) + ' Years', Math.floor(400 % year / month) + ' Months', Math.floor(400 % year % month / days) + ' Days')

console.log(Math.floor(366 / year) + ' Years', Math.floor(366 % year / month) + ' Months', Math.floor(366 % year % month / days) + ' Days')



//SOAL NOMOR 5

let date1 = new Date('2022-01-22')
let date2 = new Date('2022-01-20')

let selisihMilidetik = date1 - date2

let selisihHari = selisihMilidetik / (1000 * 60 * 60 * 24)

console.log(selisihHari)
