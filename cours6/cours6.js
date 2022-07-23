const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// let nombre = 0
// for (let i = 0; i < 11; i++) {
//     console.log(`${nombre} x ${nombre} = ${nombre*nombre}`)
//     nombre++
// }

function nombreIsPrime(nombre) {
    for (let i = 2; i < nombre / 2 + 1; i++) {
        if (nombre % i === 0) {
            return false
        }
    }
    return true
}

// for (let i = 2; i < 100; i++) {
//     const element = i;
//     if (nombreIsPrime(element)) {
//         console.log(element)
//     }
// }

// let somme = 0
// for (let i = 0; i < 101; i++) {
//     somme += i
// }
// console.log(somme)

function getArrayWith5Numbers() {
    const array = []
    for (let i = 0; i < 5; i++) {
        array.push(Math.floor(Math.random() * 100))
    }
    return array
}

// console.log(getArrayWith5Numbers())

// Develop a small script which generate a six characters random id
function getRandomId() {
    const letters = 'abcdefghijklmnopqrstuvwxyz1234567890'
    let id = ''
    for (let i = 0; i < 6; i++) {
        id += letters[Math.floor(Math.random() * letters.length)]
    }
    return id
}

// console.log(getRandomId())

// let fruits = ['banana', 'orange', 'mango', 'lemon']
// let fruits_reverse = []

// for (let i = fruits.length-1; i >= 0; i--) {
//     const element = fruits[i];
//     fruits_reverse.push(element)
// }

// console.log(fruits)
// console.log(fruits_reverse)

// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
// ]

// for (let i = 0; i < fullStack.length; i++) {
//     const element = fullStack[i];
//     if (typeof element === 'object') {
//         for (let j = 0; j < element.length; j++) {
//             const element2 = element[j];
//             console.log(element2)
//         }
//     }
//     else {
//         console.log(element)
//     }
// }

// Copy countries array(Avoid mutation)
const countriesCopy = countries.slice()

const countriesCopy2 = [...countries]
let sortedCountries = countriesCopy2.sort()

let sortedWebTechs = webTechs.sort()
let sortedMernStack = mernStack.sort()

let nouveauTableau = []
for (let i = 0; i < countries.length; i++) {
    const element = countries[i];
    // Extract from element the word "land"
    if (element.includes('land')) {
        nouveauTableau.push(element)
    }
}

console.log(nouveauTableau)
nouveauTableau = []

for (let i = 0; i < countries.length; i++) {
    const element = countries[i];
    if (element.length === 4) {
        nouveauTableau.push(element)
    }
}

console.log(nouveauTableau)

let newCountries = countries.reverse()
let newCountries2 = []
for (let i = 0; i < newCountries.length; i++) {
    const element = newCountries[i];
    newCountries2.push(element.toUpperCase())
}

console.log("newCountries : ", newCountries2)
console.log("new : ", newCountries2[0].slice(''))