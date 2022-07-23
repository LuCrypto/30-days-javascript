// alert("Je suis un message d'alerte");

// let number = prompt('Enter number', 'number goes here')
// console.log(number)

// const agree = confirm('Are you sure you like to delete? ')
// console.log(agree)

const now = new Date()
console.log(now)

console.log(now.getFullYear()) // 2020
console.log(now.getMonth()) // 0-11
console.log(now.getDate()) // 1-31
console.log(now.getDay()) // 0-6
console.log(now.getHours()) // 0-23
console.log(now.getMinutes()) // 0-59
console.log(now.getSeconds()) // 0-59
console.log(now.getMilliseconds()) // 0-999
console.log(now.getTime()) // milliseconds since January 1, 1970
console.log(now.getTimezoneOffset()) // minutes west of UTC
console.log(now.getUTCDate()) // 1-31
console.log(now.getUTCDay()) // 0-6
console.log(now.getUTCFullYear()) // 2020
console.log(now.getUTCHours()) // 0-23
console.log(now.getUTCMinutes()) // 0-59
console.log(now.getUTCSeconds()) // 0-59
console.log(now.getUTCMilliseconds()) // 0-999

let firstName = 'John';
let lastName = 'Doe';
let country = 'USA';
let city = 'New York';
let age = 25;
let isMarried = true;
let year = now.getFullYear();

console.log(typeof '10' == typeof 10)

console.log("true : ", 4 > 3)
console.log("true : ", 4 >= 3)
console.log("false : ", 4 < 3)
console.log("false : ", 4 <= 3)
console.log("true : ", 4 == 4)
console.log("true : ", 4 === 4)
console.log("false : ", 4 != 4)
console.log("false : ", 4 !== 4)
console.log("false : ", 4 != '4')
console.log("true : ", 4 == '4')
console.log("false : ", 4 === '4')

let python = 'Python';
let jargon = 'Jargon';

console.log("true : ", jargon.length == python.length)

console.log("true : ", 4 > 3 && 10 < 12)
console.log("false : ", 4 > 3 && 10 > 12)
console.log("true : ", 4 > 3 || 10 < 12)
console.log("true : ", 4 > 3 || 10 > 12)
console.log("false : ", !(4 > 3))
console.log("true : ", !(4 < 3))
console.log("true : ", !(false))
console.log("false : ", !(4 > 3 && 10 < 12))
console.log("true : ", !(4 > 3 && 10 > 12))
console.log("true : ", !(4 === '4'))
console.log("true : ", !(python.includes('on')))

// let base = prompt('Enter base', 'base goes here')
// console.log(base)

// let height = prompt('Enter height', 'height goes here')
// console.log(height)

// alert(`The area of the triangle is ${base * height / 2}`)

// let hours = prompt('Enter hours', 'hours goes here')
// console.log(hours)

// let pay = prompt('Enter pay', 'pay goes here')
// console.log(pay)

// alert(`The pay is ${hours * pay}`)

let name2 = 'fdezfge'
console.log(name.length)

