// const allTitles = document.getElementsByTagName('h1')

// console.log(allTitles) // HTMLCollections
// console.log(allTitles.length) // 4

// for (let i = 0; i < allTitles.length; i++) {
//     console.log(allTitles[i]) // prints each elements in the HTMLCollection
// }

// const allClassesTitle = document.getElementsByClassName('title')

// console.log(allClassesTitle)

// let firstTitle = document.querySelector('h1') // select the first available h1 element
// let firstTitle2 = document.querySelector('#first-title') // select id with first-title
// let firstTitle3 = document.querySelector('.title') // select the first available element with class title

// const allTitles = document.querySelectorAll('h1') // selects all the available h1 elements in the page

// console.log(allTitles.length) // 4
// for (let i = 0; i < allTitles.length; i++) {
//     console.log(allTitles[i])
// }

// allTitles[0].classList.add('title', 'header-title')

// const lists = `
//     <li>30DaysOfPython Challenge Done</li>
//             <li>30DaysOfJavaScript Challenge Ongoing</li>
//             <li>30DaysOfReact Challenge Coming</li>
//             <li>30DaysOfFullStack Challenge Coming</li>
//             <li>30DaysOfDataAnalysis Challenge Coming</li>
//             <li>30DaysOfReactNative Challenge Coming</li>
//             <li>30DaysOfMachineLearning Challenge Coming</li>`
// const ul = document.querySelector('ul')
// ul.innerHTML = lists
// ul.innerHTML = ''

// const allH1 = document.querySelectorAll('h1')

// let taille = 10
// const increaseSize = () => {
//     console.log('increaseSize')
//     for (let i = 0; i < allH1.length; i++) {
//         const element = allH1[i]
//         element.style.fontSize = taille.toString() + 'px'
//     }
// }

// const firstP = document.querySelector('p')
// console.log(firstP.innerHTML)

// const firstPWithId = document.querySelector('#p1')
// console.log(firstPWithId.innerHTML)

// const allP = document.querySelectorAll('p')
// console.log('taille : ', allP.length)
// console.log(allP[0])
// console.log(typeof allP[0])
// allP.forEach((element) => {
//     console.log(element.innerHTML)
// })

// allP[3].innerHTML = 'Je suis VIVANT'

// allP[2].setAttribute('class', 'classInventee')
// allP[2].setAttribute('id', 'idInventee')

// allP[1].classList.add('test01', 'test02', 'test03')

// allP[0].className = 'LOOOL'

// allP[0].style.color = 'red'
// allP[2].style.color = 'red'
// allP[1].style.color = 'green'
// allP[3].style.color = 'green'
