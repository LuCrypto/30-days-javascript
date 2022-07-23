// //Callback
// const doSomething = callback => {
//     setTimeout(() => {
//         const skills = ['HTML', 'CSS', 'JS']
//         callback(false, skills)
//     }, 2000)
// }

// const callback = (err, result) => {
//     if (err) {
//         return console.log(err)
//     }
//     return console.log(result)
// }

// doSomething(callback)

// Promise
// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const skills = ['HTML', 'CSS', 'JS']
//         if (skills.length > 0) {
//             resolve(skills)
//         } else {
//             reject('Something wrong has happened')
//         }
//     }, 2000)
// })

// doPromise
//     .then(result => {
//         console.log("Success")
//         console.log(result)
//     })
//     .catch(error => {
//         console.log("Erreur")
//         console.log(error)
//     })

// const url = 'https://restcountries.com/v2/all' // countries api
// fetch(url)
//     .then(response => response.json()) // accessing the API data as JSON
//     .then(data => {
//         // getting the data
//         console.log(data)
//     })
//     .catch(error => console.error(error)) // handling error if something wrong happens

// const square = async function (n) {
//     return n * n
// }

// console.log(square(2))

// const value = await square(2)
// console.log(value)

// const url = 'https://restcountries.com/v2/all'
// fetch(url)
//     .then(response => {
//         console.log("then")
//         return response.json()
//     })
//     .then(data => {
//         console.log("then2")
//         console.log(data)
//     })
//     .catch(error => console.error(error))

// const fetchData = async () => {
//     try {
//         const response = await fetch(url)
//         const countries = await response.json()
//         console.log(countries)
//     } catch (err) {
//         console.error(err)
//     }
// }
// console.log('===== async and await')
// fetchData()

// const readCountries = async () => {
//     const response = await fetch(url)
//     // console.log(response)
//     const countries = await response.json()
//     console.log(countries)

//     countries.forEach((element, index) => {
//         if (index == 0) {
//             console.log(element['population'])
//         }
//     });
// }

// const catsAPI = 'https://api.thecatapi.com/v1/breeds'
// var cats = [];
// const catFunction = async () => {
//     try {
//         const response = await fetch(catsAPI)
//         cats = await response.json()
//         console.log(cats)

//         let somme = 0
//         cats.map((element) => {
//             console.log(element['weight']['imperial'])

//             // On améliore le tableau
//             let maRegex = / +/g
//             let maString = element['weight']['imperial'].replace(maRegex, ' ')

//             let poids = maString.split(' ')
//             console.log(poids)
//             let moyen = (parseInt(poids[0]) + parseInt(poids[2])) / 2
//             console.log(moyen)
//             somme += moyen
//         })

//         console.log("somme : ", somme)
//         somme /= cats.length
//         console.log("somme : ", somme)


//     }
//     catch (err) {
//         console.error(err)
//     }
// }

// catFunction()

var test;
const countriesAPI = 'https://restcountries.com/v2/all'
const largestCountries = async () => {
    const response = await fetch(countriesAPI)
    test = await response.json()


    test = test.map((element) => {
        return [element['area'], element['name']]
    })

    console.log("test : ", test)

    test = test.sort((a, b) => {
        return b[0] - a[0]
    })

    console.log("test : ", test)


}

largestCountries()