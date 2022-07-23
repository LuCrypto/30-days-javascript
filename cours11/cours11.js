const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers

// console.log(numOne, numTwo, numThree)

// On ignore la valeur au milieu
// let [numOne, , numThree] = numbers //2 is omitted
// console.log(numOne, numThree)

// const names = [undefined, 'Brook', 'David']
// let [
//     firstPerson = 'Asabeneh',
//     secondPerson,
//     thirdPerson,
//     fourthPerson = 'John'
// ] = names

// console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)

// Result -> Asabeneh Brook David John

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let [num1, num2, num3, ...rest] = nums

// console.log(num1, num2, num3)
// console.log(rest)

// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
// ]

// for (const [first, second, third] of fullStack) {
//     console.log(first, second, third)
// }

// let array = [1, 2, 3, 4]
// console.log("skills.slice(0, -1) : ", array.slice(0, -1))

// const evens = [0, 2, 4, 6, 8, 10]
// const evenNumbers = [...evens]

// const odds = [1, 3, 5, 7, 9]
// const oddNumbers = [...odds]

// const wholeNumbers = [...evens, ...odds]

// console.log(evenNumbers)
// console.log(oddNumbers)
// console.log(wholeNumbers)

// const constants = [2.72, 3.14, 9.81, 37, 100]

// let pi, gravity, humanBodyTemp, waterBoilingTemp = constants
// console.log(pi, gravity, humanBodyTemp, waterBoilingTemp)

// const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

// let fin, est, sw, den, nor = countries
// console.log(fin, est, sw, den, nor)

// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200,
//     perimeter: 60
// }

// let { width } = rectangle
// console.log(width)

// const users = [
//     {
//         name: 'Brook',
//         scores: 75,
//         skills: ['HTM', 'CSS', 'JS'],
//         age: 16
//     },
//     {
//         name: 'Alex',
//         scores: 80,
//         skills: ['HTM', 'CSS', 'JS'],
//         age: 18
//     },
//     {
//         name: 'David',
//         scores: 75,
//         skills: ['HTM', 'CSS'],
//         age: 22
//     },
//     {
//         name: 'John',
//         scores: 85,
//         skills: ['HTML'],
//         age: 25
//     },
//     {
//         name: 'Sara',
//         scores: 95,
//         skills: ['HTM', 'CSS', 'JS'],
//         age: 26
//     },
//     {
//         name: 'Martha',
//         scores: 80,
//         skills: ['HTM', 'CSS', 'JS'],
//         age: 18
//     },
//     {
//         name: 'Thomas',
//         scores: 90,
//         skills: ['HTM', 'CSS', 'JS'],
//         age: 20
//     }
// ]

// let [{ name }, ...rest] = users

// console.log(name)
// console.log(rest)

// users.map((element) => {
//     if (element.skills.length < 2) {
//         console.log(element)
//     }
// })

// const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

// let [name2, skills, [, , jsScore, reactScore]] = student

// console.log(name2, skills, jsScore, reactScore)


const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

// Write a function called convertArrayToObject which can convert the array to a structure object.
function convertArrayToObject(array) {

}

// Fonction intermédiaire
function convertArrayToObject2(array) {
    let objet = {}

    objet['name'] = array[0]
    objet['skills'] = array[1]
    objet['scores'] = array[2]

    return objet
}

console.log(convertArrayToObject2(['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]))
























