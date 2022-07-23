
function sumAllNums() {
    console.log(arguments)
}

sumAllNums(1, "victor", 3, 4)

// Classique
function square(n) {
    return n * n
}

// Arrow function
const square2 = n => {
    return n * n
}

// Arrow function without brackets
const square3 = n => n * n

function fullName(name) {
    return `${name.firstName} ${name.lastName}`
}

my_name = {
    firstName: "Victor",
    lastName: "Leroy"
}

console.log(fullName(my_name))

function capitalizeArray(array) {
    return array.map(element => element.toUpperCase())
}

let mon_tableau = ["Victor", "Leroy"]
console.log(capitalizeArray(mon_tableau))


// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(hexa) {
    let rgb = []
    for (let i = 0; i < 3; i++) {
        let hexa_part = hexa.substring(i * 2, i * 2 + 2)
        let decimal = parseInt(hexa_part, 16)
        rgb.push(decimal)
    }
    return rgb
}

console.log("test : ", convertHexaToRgb("fcba03"))

function isPrime(number) {
    if (isPrime < 2)
        return false
    for (let i = 2; i < (number / 2) + 1; i++) {
        if (number % i == 0) {
            return false
        }
    }
    return true
}

let tableau_nombre = []
for (let i = 0; i < 100; i++) {
    tableau_nombre.push(i + 2)
}

let tableau_premiers = []
for (let i = 0; i < tableau_nombre.length; i++) {
    const element = tableau_nombre[i];
    if (isPrime(element)) {
        tableau_premiers.push(element)
    }
}

console.log("tableau_premiers : ", tableau_premiers)

// Write a functions which checks if all items are unique in the array.
function isUnique(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                return false
            }
        }
    }
    return true
}

function sevenRandomNumbers() {
    let tab = []
    for (let i = 0; i < 7; i++) {
        tab.push(Math.floor(Math.random() * 10))
    }
    return tab
}

console.log(sevenRandomNumbers())