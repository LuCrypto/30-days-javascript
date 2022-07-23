// // console.log('30 Days of JavaScript')
// // console.log('%d %s of JavaScript', 30, 'Days')

// // // log output is green
// // console.log('%c30 Days Of JavaScript', 'color:green', 'test')
// // // log output green red and yellow text
// // console.log(
// //     '%c30 Days%c %cOf%c %cJavaScript%c',
// //     'color:green',
// //     '',
// //     'color:red',
// //     '',
// //     'color:yellow'
// // )

// // console.warn('This is a warning')

// // console.error('This is an error message')

// // const names = ['Asabeneh', 'Brook', 'David', 'John']
// // console.table(names)


// // const user = {
// //     name: 'Asabeneh',
// //     title: 'Programmer',
// //     country: 'Finland',
// //     city: 'Helsinki',
// //     age: 250
// // }
// // console.table(user)

// // const countries = [
// //     ['Finland', 'Helsinki'],
// //     ['Sweden', 'Stockholm'],
// //     ['Norway', 'Oslo']
// // ]
// // console.table(countries)

// // const users = [
// //     {
// //         name: 'Asabeneh',
// //         title: 'Programmer',
// //         country: 'Finland',
// //         city: 'Helsinki',
// //         age: 250
// //     },
// //     {
// //         name: 'Eyob',
// //         title: 'Teacher',
// //         country: 'Sweden',
// //         city: 'London',
// //         age: 25
// //     },
// //     {
// //         name: 'Asab',
// //         title: 'Instructor',
// //         country: 'Norway',
// //         city: 'Oslo',
// //         age: 22
// //     },
// //     {
// //         name: 'Matias',
// //         title: 'Developer',
// //         country: 'Denmark',
// //         city: 'Copenhagen',
// //         age: 28
// //     }
// // ]
// // console.table(users)

// // function myFunction() {
// //     let somme = 0
// //     for (let i = 0; i < 10000; i++) {
// //         somme += i + 1 * 2 / 7
// //     }
// //     return somme
// // }

// // console.time('timer01')
// // myFunction()
// // console.timeEnd('timer01')

// // console.info('30 Days Of JavaScript challenge is trending on Github')
// // console.log('30 Days Of JavaScript challenge is trending on Github')

// // console.assert(4 > 3, '4 is greater than 3') // no result
// // console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4
// // console.log("apres")


// const names = ['Asabeneh', 'Brook', 'David', 'John']
// const countries = [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo']
// ]
// const user = {
//     name: 'Asabeneh',
//     title: 'Programmer',
//     country: 'Finland',
//     city: 'Helsinki',
//     age: 250
// }
// const users = [
//     {
//         name: 'Asabeneh',
//         title: 'Programmer',
//         country: 'Finland',
//         city: 'Helsinki',
//         age: 250
//     },
//     {
//         name: 'Eyob',
//         title: 'Teacher',
//         country: 'Sweden',
//         city: 'London',
//         age: 25
//     },
//     {
//         name: 'Asab',
//         title: 'Instructor',
//         country: 'Norway',
//         city: 'Oslo',
//         age: 22
//     },
//     {
//         name: 'Matias',
//         title: 'Developer',
//         country: 'Denmark',
//         city: 'Copenhagen',
//         age: 28
//     }
// ]

// console.group('Names')
// console.log(names)
// console.groupEnd()

// console.group('Countries')
// console.log(countries)
// console.groupEnd()

// console.group('Users')
// console.log(user)
// console.log(users)
// console.groupEnd()


// console.count('Function has been called')
// console.count('Function has been called')
// console.count('Function has been called')


let bigNumber = 1000000000

console.time('for')
let somme = 0
for (let i = 0; i < bigNumber; i++) {
    somme += i
}
console.timeEnd('for')
console.log("somme : ", somme)

console.time('while')
somme = 0
let indice = 0
while (indice < bigNumber) {
    somme += indice
    indice += 1
}
console.timeEnd('while')
console.log("somme : ", somme)
