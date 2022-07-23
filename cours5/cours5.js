// const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
// console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

// const numbers = [1, 2, 3, 4, 5, 3, 1, 2]
// console.log(numbers.indexOf(5)) // -> 4
// console.log(numbers.lastIndexOf(2)) // 7


// // Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position
// console.log("=============================")
// const numbers2 = [1,2,3,4,5]
// console.log(numbers2.slice()) // -> it copies all  item
// console.log(numbers2.slice(0)) // -> it copies all  item
// console.log(numbers2.slice(0, numbers2.length)) // it copies all  item
// console.log(numbers2.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position

// // Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.
// numbers.splice(0,1)
// numbers.splice(3, 3, 7, 8, 9)

// const arr  = ['item1', 'item2','item3']
// arr.push('new item') // it adds new item at the end of the array
// arr.pop()   // removes the last item
// arr.shift() // -> remove one item from the beginning
// arr.unshift(0) // -> add one item at the beginning
// arr.reverse() // -> reverse array order
// arr.sort()

// Level 1

// let tableau_vide = [];
// let tableau_cinq =  Array(5).fill(0);

// tableau_cinq.length // 5

// // First
// tableau_cinq[0]
// // Last
// tableau_cinq[tableau_cinq.length - 1]
// // Middle
// tableau_cinq[Math.floor(tableau_cinq.length / 2)]
// // ...

// Level 2
// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// // remove all ponctuation
// text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
// console.log(text)
// let tableau = text.split(' ')
// console.log(tableau)
// console.log(tableau.length)

// let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// shoppingCart.unshift('Meat') // add at the beginning
// shoppingCart.push('Sugar')
// shoppingCart = shoppingCart.filter(item => item !== 'Honey') // remove items that match the condition
// // Modify Tea to Green Tea
// shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
// console.log(shoppingCart)

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']

// const fullStack = [...frontEnd, ...backEnd]

// console.log(fullStack)

// Level 3

// The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]


ages.sort()
console.log(ages)

let minimum = ages[0]
let maximum = ages[ages.length - 1]

let median
if (ages.length % 2 == 0) {
    median = (ages[ages.length / 2] + ages[ages.length / 2 - 1]) / 2
}
else {
    median = ages[ages.length/2]
}

let average = 0
for (let i = 0; i < ages.length; i++) {
    const element = array[i];
    average += element;
}

average = average / ages.length

