// const usersText = `{
//     "users":[
//       {
//         "firstName":"Asabeneh",
//         "lastName":"Yetayeh",
//         "age":250,
//         "email":"asab@asb.com"
//       },
//       {
//         "firstName":"Alex",
//         "lastName":"James",
//         "age":25,
//         "email":"alex@alex.com"
//       },
//       {
//       "firstName":"Lidiya",
//       "lastName":"Tekle",
//       "age":28,
//       "email":"lidiya@lidiya.com"
//       }
//     ]
//     }`

// const usersObj = JSON.parse(usersText, (key, value) => {
//     let newValue =
//         typeof value == 'number' ? value + 1 : value
//     return newValue
// })
// // console.log(usersObj)

// const user = [
//     {
//         firstName: 'Asabeneh',
//         lastName: 'Yetayeh',
//         country: 'Finland',
//         city: 'Helsinki',
//         email: 'alex@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
//         age: 250,
//         isLoggedIn: false,
//         points: 30
//     },
//     {
//         firstName: 'fzfez',
//         lastName: 'Yetayeh',
//         country: 'Finland',
//         city: 'Helsinki',
//         email: 'alex@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
//         age: 250,
//         isLoggedIn: false,
//         points: 30
//     }
// ]

// const txt = JSON.stringify(user, ['firstName', 'lastName', 'country', 'city', 'age', 'isLoggedIn'], 4)
// console.log(txt)


const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']

let result = JSON.stringify(skills)
console.log("result : ", result)

let age = 250;
let result2 = JSON.stringify(age)
console.log(result2)

let isMarried = true

const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',]
}

let result3 = JSON.stringify(student)
console.log("result3 : ", result3)

let result4 = JSON.stringify(student, ['firstName', 'lastName', 'skills'])
console.log("result4 : ", result4)

const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

let result5 = JSON.parse(txt)
console.log('result5 : ', result5)

Object.keys(result5).forEach((element) => {
    console.log(element)
    console.log(result5[element].skills.length)
})