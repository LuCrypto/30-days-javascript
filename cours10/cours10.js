// const languages = [
//     'English',
//     'Finnish',
//     'English',
//     'French',
//     'Spanish',
//     'English',
//     'French',
// ]

// const setOfLanguages = new Set(languages)
// console.log(setOfLanguages)

// setOfLanguages.add("test")
// console.log(setOfLanguages.delete('Spanish'))
// console.log(setOfLanguages)
// console.log(setOfLanguages.has('Apple')) // false
// setOfLanguages.clear()

// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]
// let c = [...a, ...b]

// let A = new Set(a)
// let B = new Set(b)
// let C = new Set(c)

// console.log(C)

// // ****************************************************************************
// // Map

// let countries = [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo'],
// ]
// const map = new Map(countries)
// console.log(map)
// console.log(map.size)

// const countriesMap = new Map()
// console.log(countriesMap.size) // 0
// countriesMap.set('Finland', 'Helsinki')
// countriesMap.set('Sweden', 'Stockholm')
// countriesMap.set('Norway', 'Oslo')
// console.log(countriesMap)
// console.log(countriesMap.size)

// // Getting a value from Map
// console.log(countriesMap.get('Finland'))

// // Checking key in Map
// console.log(countriesMap.has('Finland'))

// ****************************************************************************
// Exercices

// const emptySet = new Set()

// for (let i = 0; i < 11; i++) {
//     emptySet.add(i)
// }

// console.log("emptySet : ", emptySet)

// emptySet.delete(5)
// console.log("emptySet : ", emptySet)
// emptySet.clear()

import { countries } from './countries.js'

// let arrayA = [1, 2, 3]
// let arrayB = [4, 5]

// const setA = new Set(arrayA)
// const setB = new Set(arrayB)

// // setA.add(setB)
// // console.log(setA)

// // Union
// arrayB.map((element) => arrayA.push(element))

// // Intersection
// arrayA.concat(arrayB)

let emptyArrayLanguages = []

countries.map((element) => element.languages.map((element2) => emptyArrayLanguages.push(element2)))

console.log(emptyArrayLanguages)

let setUniqueLanguages = new Set(emptyArrayLanguages)
console.log(setUniqueLanguages)