// let dog = {}

// console.log(dog)

// dog.name = 'Fido'
// dog.legs = 4
// dog.color = "red"
// dog.bark = function () {
//     return 'Woof Woof'
// }

// console.log(dog.name)
// console.log(dog.legs)
// console.log(dog.color)
// console.log(dog.bark())

// const users = {
//     Alex: {
//         email: 'alex@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript'],
//         age: 20,
//         isLoggedIn: false,
//         points: 30
//     },
//     Asab: {
//         email: 'asab@asab.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//         age: 25,
//         isLoggedIn: false,
//         points: 50
//     },
//     Brook: {
//         email: 'daniel@daniel.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//         age: 30,
//         isLoggedIn: true,
//         points: 50
//     },
//     Daniel: {
//         email: 'daniel@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     },
//     John: {
//         email: 'john@john.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//         age: 20,
//         isLoggedIn: true,
//         points: 50
//     },
//     Thomas: {
//         email: 'thomas@thomas.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     },
//     Paul: {
//         email: 'paul@paul.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     }
// }


// let maximum = 0
// let keyMax = ''
// let countLoggedIn = 0
// let pointOver50 = 0

// Object.keys(users).forEach(key => {
//     if (users[key].skills.length > maximum) {
//         maximum = users[key].skills.length
//         keyMax = key
//     }
//     if (users[key].isLoggedIn) {
//         countLoggedIn++
//     }
//     if (users[key].points > 50) {
//         pointOver50++
//     }
// })

// console.log(maximum)
// console.log(keyMax)
// console.log(countLoggedIn)
// console.log(pointOver50)

// arrayMern = ['Node', 'Express', 'React', 'MongoDB']

// Object.keys(users).forEach(key => {
//     let trouver = 0
//     for (let i = 0; i < arrayMern.length; i++) {
//         for (let j = 0; j < users[key].skills.length; j++) {
//             if (users[key].skills[j] === arrayMern[i]) {
//                 trouver++
//             }
//         }
//     }

//     if (trouver == 4) {
//         console.log(`${key} has all skills in common with MERN Stack`)
//     }
// })


// let personAccount = {
//     firstname: 'John',
//     lastname: 'Doe',
//     incomes: [
//         {
//             description: 'Restaurant',
//             amount: '100'
//         },
//         {
//             description: 'Salary',
//             amount: '1000'
//         },
//         {
//             description: 'Vacation',
//             amount: '400'
//         },
//         {
//             description: 'Gift',
//             amount: '200'
//         }
//     ],
//     expenses: [
//         {
//             description: 'Rent',
//             amount: '1000'
//         },
//         {
//             description: 'Coffee',
//             amount: '300'
//         },
//         {
//             description: 'Gas',
//             amount: '100'
//         }
//     ],
//     totalIncome: function () {
//         let somme = 0
//         for (let i = 0; i < this.incomes.length; i++) {
//             const element = this.incomes[i];
//             somme += parseInt(element.amount)
//         }
//         return somme
//     },
//     totalExpenses: function () {
//         let somme = 0
//         for (let i = 0; i < this.expenses.length; i++) {
//             const element = this.expenses[i];
//             somme += parseInt(element.amount)
//         }
//         return somme
//     },
//     accountInfo: function () {
//         console.log(`accountInfo : ${this.firstname} ${this.lastname}`)
//     },
//     addIncome: function (income) {
//         this.incomes.push(income)
//     },
//     addExpense: function (expense) {
//         this.expenses.push(expense)
//     },
//     accountBalance: function () {
//         return (this.totalIncome() - this.totalExpenses())
//     }
// }


// console.log("personAccount total income : ", personAccount.totalIncome())
// console.log("personAccount total expenses : ", personAccount.totalExpenses())
// console.log("personAccount accountInfo : ", personAccount.accountInfo())
// console.log("personAccount addIncome : ", personAccount.addIncome({ description: "jouet", amount: "150" }))
// console.log("personAccount incomes : ", personAccount.incomes)
// console.log("personAccount accountBalance : ", personAccount.accountBalance())


const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    },
];

// Permet de s'enregistrer
function signUp(objet = { username: "test", email: "test", password: "test" }) {
    if (objet.username == "test") {
        console.log("Impossible !")
        return
    }

    // On vérifie le username
    for (let i = 0; i < users.length; i++) {
        const element = users[i];
        if (element.username == objet.username) {
            console.log("You have already an account !")
            return
        }
        // element.email
        // element.password
        // element.isLoggedIn
        // element.createdAt
        // element._id
    }

    users.push({
        username: objet.username,
        email: objet.email,
        password: objet.password,
        createdAt: Date.now(),
        _id: Math.floor(Math.random() * 100000)
    })
    console.log("dernier : ", users[users.length - 1])
}

// Permet de se connecter
function signIn(objet = { username: "test", password: "test" }) {
    if (objet.username == "test")
        return

    for (let i = 0; i < users.length; i++) {
        const element = users[i];
        if (element.username == objet.username) {
            if (element.password == objet.password) {
                console.log("Vous etes connecte !")
                element.isLoggedIn = true
            }
            else {
                console.log("Mauvais password")
            }
            return
        }
    }

    console.log("Pas trouve !")
}


const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]


signUp({ username: "salut", email: "salut", password: "salut" })
signIn({ username: "salut", password: "salut" })

// Permet de donner un avis sur un produit
function rateProduct(objet = { username: "salut", name: "produit", rate: 3 }) {
    let trouver = -1
    let idUser = 0
    for (let i = 0; i < users.length; i++) {
        const element = users[i];
        if (element.username == objet.username) {
            trouver = i
            idUser = element._id
            break
        }
    }

    if (trouver == -1) {
        console.log("Pas de user connecte")
        return
    }


    for (let i = 0; i < products.length; i++) {
        const element = products[i];
        if (element.name == objet.name) {
            element.ratings.push(
                {
                    userId: idUser.toString(),
                    rate: objet.rate
                }
            )
        }
    }

    // On affiche le résultat
    console.log("products : ", products)
}


// Permet de calculer la moyenne des avis
function averageRating(objet = { name: "produit" }) {

    for (let i = 0; i < products.length; i++) {
        const element = products[i];
        if (element.name == objet.name) {
            let somme = 0
            if (element.ratings.length == 0) {
                return 0
            }
            else {
                for (let k = 0; k < element.ratings.length; k++) {
                    const element2 = element.ratings[k].rate;
                    somme += element2
                }
                somme /= element.ratings.length
                return somme
            }

        }
    }
}

// Permet de like un produit ou d'enlever si déjà like
function likeProduct(objet = { username: "salutff", name: "produit" }) {
    let trouver = -1
    let idUser = 0
    for (let i = 0; i < users.length; i++) {
        const element = users[i];
        if (element.username == objet.username) {
            trouver = i
            idUser = element._id
            break
        }
    }

    if (trouver == -1) {
        console.log("Pas de user connecte")
        return
    }

    for (let i = 0; i < products.length; i++) {
        const element = products[i];
        if (element.name == objet.name) {
            let ancienLength = element.likes.length
            console.log("ancienLength : ", ancienLength)
            element.likes = element.likes.filter(x => x != idUser)
            console.log("element.likes.length : ", element.likes.length)
            console.log("element.likes : ", element.likes)

            // Si la meme taille alors il n'était pas dedans et on le rajoute
            if (element.likes.length == ancienLength) {
                element.likes.push(idUser.toString())
            }
            else { }
        }
    }

    console.log("products : ", products)
}

rateProduct({ username: "salut", name: "Laptop", rate: 4 })
console.log(averageRating({ name: "mobile phone" }))
likeProduct({ username: "salut", name: "Laptop" })
likeProduct({ username: "salut", name: "Laptop" })
