import { countries } from './countries.js'

console.log(countries.length)

const myContainer = document.querySelector('.myContainer')
myContainer.style.display = 'flex'
myContainer.style.alignItems = 'center'
myContainer.style.flexWrap = 'wrap'

countries.forEach((element) => {
    console.log(element.name)

    const maDiv = document.createElement('div')
    const monPara = document.createElement('p')

    monPara.style.fontSize = '16px'
    monPara.style.textAlign = 'center'
    monPara.innerHTML = element.name
    monPara.style.fontFamily = 'sans-serif'

    maDiv.appendChild(monPara)

    maDiv.style.width = '100px'
    maDiv.style.height = '100px'
    maDiv.style.marginRight = '5px'
    maDiv.style.marginBottom = '5px'
    maDiv.style.border = '1px solid black'
    maDiv.style.boxShadow = '2px 2px 2px black'

    myContainer.appendChild(maDiv)
})
