const myContainer = document.querySelector('.myContainer')
myContainer.style.display = 'flex'
myContainer.style.flexDirection = 'column'
myContainer.style.alignItems = 'center'
myContainer.style.boxSizing = 'border-box'

const youPressed = document.querySelector('#youPressed')
youPressed.style.border = '1px solid black'
youPressed.style.textAlign = 'center'
youPressed.style.marginTop = '110px'
youPressed.style.fontSize = '80px'
youPressed.style.padding = '5px'

const codeDiv = document.querySelector('#codeDiv')
codeDiv.style.border = '1px solid black'
codeDiv.style.marginTop = '20px'
codeDiv.style.fontSize = '80px'
codeDiv.style.padding = '5px'

const lettre = document.querySelector('#lettre')
const codeLettre = document.querySelector('#codeLettre')

document.body.addEventListener('keydown', (e) => {
    console.log('e.key : ', e.key)
    lettre.innerHTML = e.key
    codeLettre.innerHTML = e.code
})
