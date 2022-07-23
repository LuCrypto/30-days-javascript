// class Person {
//     constructor(firstName, lastName, age, country, city) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.country = country
//         this.city = city
//         this.score = 0
//         this.skills = []
//     }
//     getFullName() {
//         const fullName = this.firstName + ' ' + this.lastName
//         return fullName
//     }
//     getPersonInfo() {
//         console.log("Je suis un getPersonInfo")
//     }
//     get getScore() {
//         return this.score
//     }
//     get getSkills() {
//         return this.skills
//     }
//     set setScore(score) {
//         this.score += score
//     }
//     set setSkill(skill) {
//         this.skills.push(skill)
//     }

//     static favoriteSkill() {
//         const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
//         const index = Math.floor(Math.random() * skills.length)
//         return skills[index]
//     }
//     static showDateTime() {
//         let now = new Date()
//         let year = now.getFullYear()
//         let month = now.getMonth() + 1
//         let date = now.getDate()
//         let hours = now.getHours()
//         let minutes = now.getMinutes()
//         if (hours < 10) {
//             hours = '0' + hours
//         }
//         if (minutes < 10) {
//             minutes = '0' + minutes
//         }

//         let dateMonthYear = date + '.' + month + '.' + year
//         let time = hours + ':' + minutes
//         let fullTime = dateMonthYear + ' ' + time
//         return fullTime
//     }
// }

// const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
// const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

// person1.setScore = 1
// person1.setScore = 1
// person1.setSkill = 'HTML'
// person1.setSkill = 'CSS'
// person1.setSkill = 'JavaScript'

// person2.setScore = 1
// person2.setSkill = 'Planning'
// person2.setSkill = 'Managing'
// person2.setSkill = 'Organizing'

// console.log(person1.score)
// console.log(person2.score)

// console.log(person1.skills)
// console.log(person2.skills)

// console.log(Person.favoriteSkill())


// class Student extends Person {
//     saySomething() {
//         console.log('I am a child of the person class')
//     }
//     // Overriding methods
//     getPersonInfo() {
//         // On appelle la fonction du parent
//         super.getPersonInfo()

//         console.log("TEST")
//         // let fullName = this.getFullName()
//         // let skills =
//         //     this.skills.length > 0 &&
//         //     this.skills.slice(0, this.skills.length - 1).join(', ') +
//         //     ` and ${this.skills[this.skills.length - 1]}`

//         // let formattedSkills = skills ? `He knows ${skills}` : ''
//         // let pronoun = this.gender == 'Male' ? 'He' : 'She'

//         // let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
//         // return info
//     }
// }

// const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
// // console.log(s1)
// // console.log(s1.saySomething())
// // console.log(s1.getFullName())
// console.log(s1.getPersonInfo())

class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }

    speak() {
        console.log("???")
    }
}

class Dog extends Animal {
    constructor(name, age, color, legs) {
        super(name, age, color, legs)
    }

    speak() {
        console.log("whaouf")
    }
}

class Cat extends Animal {
    constructor(name, age, color, legs) {
        super(name, age, color, legs)
    }

    speak() {
        console.log('miaou')
    }
}

let mypet = new Animal('test')
let myDog = new Dog()
let myCat = new Cat()


mypet.speak()
myDog.speak()
myCat.speak()

