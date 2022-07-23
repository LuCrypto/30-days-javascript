// let array = [1, 2, 3, 4]

// localStorage.setItem('salut', JSON.stringify(array))

// let result = JSON.parse(localStorage.getItem('salut'))
// console.log(typeof result)
// console.log(result)
// console.log(result.length)

let mesInfos = {
    firstName: 'luc',
    lastName: 'jager',
    age: 22,
    country: 'France',
    city: 'Schiltigheim',
    presentation: function () {
        console.log("Je me présente :", this.firstName, this.lastName)
    }
}

function converter(key, val) {
    if (typeof val === 'function' || val && val.constructor === RegExp) {
        return String(val)
    }
    return val
}

console.log(mesInfos)
localStorage.setItem('mesInfos', JSON.stringify(mesInfos, converter, 4))

console.log(JSON.parse(localStorage.getItem('mesInfos'), (key, value) => {
    console.log(key)
    return value
}))

