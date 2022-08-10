// Initialisation
const year = document.querySelector('h1')

// Return a random color
const randomColorFunction = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

// Change color year
const changeColorYear = () => {
    const randomColor = randomColorFunction()
    year.style.color = randomColor
}

// Change background color date time
const changeBackgroundColorDateTime = () => {
    console.log('changeBackgroundColorDateTime')
    const dateTime = document.querySelector('.datetime')
    const randomColor = randomColorFunction()

    dateTime.innerHTML = new Date().toUTCString()
    dateTime.style.backgroundColor = randomColor
}

// Center all body
const centerElement = () => {
    const wrapper = document.querySelector('.wrapper')
    wrapper.style.textAlign = 'center'
    wrapper.style.display = 'flex'
    wrapper.style.alignItems = 'center'
    wrapper.style.justifyContent = 'center'
    wrapper.style.flexDirection = 'column'
}

// Color li
const colorLi = () => {
    const allLi = document.querySelectorAll('li')
    allLi.forEach((element) => {
        const textLi = element.innerHTML
        const tabLiText = textLi.split(' ')
        const stateLi = tabLiText[tabLiText.length - 1]

        if (stateLi.localeCompare('Done') === 0) {
            element.style.backgroundColor = 'rgb(91,188,122)'
        } else if (stateLi.localeCompare('Ongoing') === 0) {
            element.style.backgroundColor = 'rgb(247,220,92)'
        } else {
            element.style.backgroundColor = 'rgb(235,105,91)'
        }
        element.style.fontSize = '20px'
        element.style.padding = '15px'
        element.style.textAlign = 'left'
        element.style.marginTop = '2px'
        element.style.fontFamily = 'sans-serif'
    })
}

// Subline h2
const h2 = document.querySelector('h2')
h2.style.textDecoration = 'underline'

centerElement()
colorLi()

// Create date time
const ul = document.querySelector('ul')

// Css pour la liste
ul.style.listStyleType = 'none'
ul.style.width = '700px'

const div = document.createElement('div')

div.style.width = '230px'
div.style.padding = '5px'

div.classList.add('datetime')
const dateTime = new Date()
div.appendChild(document.createTextNode(dateTime.toUTCString()))

ul.parentElement.insertBefore(div, ul)

// Put interval functions
setInterval(changeColorYear, 1000)
setInterval(changeBackgroundColorDateTime, 1000)
