// function printHello() {
//     console.log("Hello !")
// }

// // Call printHello every 1000 ms
// setInterval(printHello, 1000)

// // Call printHello after 2000 ms
// setTimeout(printHello, 2000)

// let test = [1, 2, 3, 4, 5, 6, 7, 8]
// test.forEach((element, i, a) => console.log(element, i, a));

// Map permet d'effectuer une operation sur l'ensemble du tableau
// test = test.map((element) => {
//     if (element % 2 == 0) {
//         return element += 1
//     }
//     else
//         return element
// })

// console.log(test)

// Filter permet de filtrer un tableau à l'aide d'une condition
// let nouveauTableau = test.filter((element) => element % 2 == 0)
// console.log("nouveauTableau : ", nouveauTableau)

//
// const numbers = [1, 2, 3, 4, 5]
// const sum = numbers.reduce((accumulateur, elementActuel) => {
//     console.log("accumulateur : ", accumulateur)
//     console.log("elementActuel : ", elementActuel)
//     console.log("=================")
//     return (accumulateur + elementActuel)
// }, 10)

// console.log(sum)

// Find permet de renvoyer le premier element qui satisfait la condition sinon renvoie undefined
// let resultat = numbers.find((element) => element % 45 == 0)
// console.log(resultat)

// FindIndex est pareil que find sauf qu'il renvoie l'indice au lieu de l'élément
// let resultat = numbers.findIndex((element) => element % 5 == 0)
// console.log(resultat)

// Avec some, si au moins un élément correspond à la condition alors on renvoie true
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// let result = names.some((element) => typeof element == 'number')
// console.log("result : ", result)


// const numbers = [9.81, 3.14, 100, 37]
// // Using sort method to sort number items provide a wrong result. see below
// console.log(numbers.sort()) //[100, 3.14, 37, 9.81]
// numbers.sort(function (a, b) {
//   return a - b
// })

// console.log(numbers) // [3.14, 9.81, 37, 100]

// numbers.sort(function (a, b) {
//   return b - a
// })
// console.log(numbers) //[100, 37, 9.81, 3.14]


// objArr.sort(function (a, b) {
//     if (a.key < b.key) return -1
//     if (a.key > b.key) return 1
//     return 0
// })

// // or

// objArr.sort(function (a, b) {
//     if (a['key'] < b['key']) return -1
//     if (a['key'] > b['key']) return 1
//     return 0
// })

// const users = [
//     { name: 'Asabeneh', age: 150 },
//     { name: 'Brook', age: 50 },
//     { name: 'Eyob', age: 100 },
//     { name: 'Elias', age: 22 },
// ]
// users.sort((a, b) => {
//     if (a.age < b.age) return -1
//     if (a.age > b.age) return 1
//     return 0
// })
// console.log(users) // sorted ascending
//   // [{…}, {…}, {…}, {…}]

// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const products = [
//     { product: 'banana', price: 3 },
//     { product: 'mango', price: 6 },
//     { product: 'potato', price: ' ' },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 },
//     { product: 'tea', price: '' },
// ]

// // Fonction callback
// const callback = (element) => {
//     console.log("I am callback : ", element)
// }

// countries.forEach(callback)
// names.forEach(callback)
// numbers.forEach(callback)

// let upperArray = countries.map((element) => element.toUpperCase())
// console.log(upperArray)

// let lengthCoutries = countries.map((element) => element.length)
// console.log(lengthCoutries)

// let newArrayNumbers = numbers.map((element) => element * element)
// console.log(newArrayNumbers)

// let newProducts = products.map((element) => element.price)
// console.log(newProducts)

// let filterCountries = countries.filter((element) => element.includes("land"))
// console.log(filterCountries)

// let sixCharCoutries = countries.filter((element) => element.length == 6)
// console.log(sixCharCoutries)

// let newFilterCountries = countries.filter((element) => element.length >= 6)
// console.log(newFilterCountries)

// let startWithECountries = countries.filter((element) => element[0] == 'E')
// console.log(startWithECountries)

// let productsWithPrice = products.filter((element) => typeof element.price == 'number')
// console.log(productsWithPrice)

// // Renvoie tous les elements string du tableau
// function getStringLists(array) {
//     return array.filter((element) => typeof element == 'string')
// }

// let reduceTest = numbers.reduce((somme, element) => somme + element, 0)
// console.log("reduceTest : ", reduceTest)

// let allCountriesInSentence = countries.reduce((debut, element, index, array) => {
//     if (index == array.length - 1)
//         return debut + 'and ' + element + ' are north European countries'
//     return debut + element + ', '
// }
//     , '')
// console.log("allCountriesInSentence : ", allCountriesInSentence)

// let lengthGreater = numbers.some((element) => element.length > 7)

// let everyCountries = countries.every((element) => element.includes('land'))

// let findCountries = countries.find((element) => element.length == 6)

// let totalPrice = products.filter((element) => typeof element.price == 'number').reduce((debut, element) => debut + element.price, 0)
// let arrayPrice = products.filter((element) => typeof element.price == 'number')
// console.log("arrayPrice : ", arrayPrice)
// console.log("totalPrice : ", totalPrice)


// // double reduce ???
// // let totalPrice2 = products.reduce((debut, element) => debut + element.split(' ').reduce((debut2, element2) => element.price, 0), 0)
// // console.log("totalPrice2 : ", totalPrice2)

// let totalPrice3 = products.reduce((debut, element) => {
//     if (typeof element.price == 'number') {
//         return debut + element.price
//     }
//     return debut
// }, 0)

// console.log("totalPrice3 : ", totalPrice3)

// import { countries } from './countries.js'

// console.log("countries : ", countries)

// function categorizeCountries() {
//     return countries.filter((element) => element.name.includes('land') || element.name.includes('ia') ||
//         element.name.includes('island') || element.name.includes('stan'))
// }

// console.log("categorizeCountries : ", categorizeCountries())

// function letterStart(letter) {
//     return countries.filter((element) => element.name[0] == letter)
// }

// console.log(letterStart('A'))

// function getFirstTenCountries() {
//     let newArray = []
//     for (let i = 0; i < 10; i++) {
//         newArray.push(countries[i])
//     }
//     return newArray
// }

// console.log(getFirstTenCountries())

// function getLastTenCountries() {
//     let newArray = []
//     for (let i = countries.length - 10; i < countries.length; i++) {
//         newArray.push(countries[i])
//     }
//     return newArray
// }

// console.log(getLastTenCountries())

// // Trier par nom
// let sortName = countries.sort((element) => {
//     element.name
// })
// console.log("sortNamqe : ", sortName)


// // Trier par capitale
// let sortCapitale = countries.sort((a, b) => {
//     if (a.capital < b.capital) return -1
//     if (a.capital > b.capital) return 1
//     return 0
// })
// console.log("sortName : ", sortCapitale)

// // Trier par population
// let sortPopulation = countries.sort((a, b) => {
//     if (a.population < b.population) return -1
//     if (a.population > b.population) return 1
//     return 0
// })
// console.log("sortName : ", sortPopulation)

// countries -> languages ->
// Pour chaque element je vais utiliser un hash pour compte le nombre d'element et apres je trie
// let objetEmpty = {}
// countries.map((element) => element.languages.map((element2) => {
//     if (objetEmpty.hasOwnProperty(element2)) {
//         objetEmpty[element2] += 1
//     }
//     else {
//         objetEmpty[element2] = 1
//     }
// }))

// console.log("objetEmpty : ", objetEmpty)

// let sortable = [];
// for (var element in objetEmpty) {
//     sortable.push([element, objetEmpty[element]]);
// }

// console.log("sortable : ", sortable)

// sortable.sort(function (a, b) {
//     return b[1] - a[1];
// });

// console.log("sortable : ", sortable.slice(0, 10))


// countries -> population ->
// Pour chaque element je vais utiliser un hash pour compte le nombre d'element et apres je trie
// let array = []
// countries.map((element) => array.push([element.name, element.population]))

// array.sort(function (a, b) {
//     return b[1] - a[1];
// });

// console.log("array : ", array.slice(0, 10))

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

let statistics = {
    count() {
        console.log(ages.length)
    },
    sum() {
        let somme = ages.reduce((debut, element) => debut + element, 0)
        console.log(somme)
    },
    min() {
        console.log(Math.min.apply(Math, ages))
    },
    max() {
        console.log(Math.max.apply(Math, ages))
    },
    range() {
        console.log(Math.max.apply(Math, ages) - Math.min.apply(Math, ages))
    }
}


statistics.count()
statistics.sum()
statistics.min()
statistics.max()
statistics.range()


