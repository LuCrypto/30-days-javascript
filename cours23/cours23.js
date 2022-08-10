// const myContainer = document.body.querySelector('div')

// myContainer.style.backgroundColor = 'rgb(255,0,0)'
// myContainer.style.height = '100px'
// myContainer.style.width = '100px'

// myContainer.addEventListener('dblclick', (e) => {
//     console.log('e gives the event listener object:', e)
//     myContainer.style.backgroundColor = 'rgb(0,255,0)'
// })

// const mass = document.querySelector('#mass')
// const height = document.querySelector('#height')
// const button = document.querySelector('button')

// let bmi
// button.addEventListener('click', () => {
//     bmi = mass.value / height.value ** 2
//     alert(`your bmi is ${bmi.toFixed(2)}`)
//     console.log(bmi)
// })

// const input = document.querySelector('input')
// const p = document.querySelector('p')

// input.addEventListener('input', e => {
//     p.textContent = e.target.value
// })

// const input = document.querySelector('input')
// const p = document.querySelector('p')

// input.addEventListener('blur', (e) => {
//     p.textContent = 'Field is required'
//     p.style.color = 'red'
// })

// document.body.addEventListener('keypress', e => {
//     alert(e.keyCode)
// })

const isPrime = (number) => {
    if (number < 2) {
        return false
    } else if (number === 2) {
        return true
    }

    for (let i = 2; i < number / 2; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}

const myContainer = document.querySelector('.myContainer')
myContainer.style.display = 'flex'
myContainer.style.flexDirection = 'column'
myContainer.style.alignItems = 'center'
myContainer.style.boxSizing = 'border-box'

const containerGenerate = document.querySelector('#containerGenerate')
containerGenerate.style.display = 'flex'
containerGenerate.style.justifyContent = 'center'
containerGenerate.style.width = '100%'

const number = document.querySelector('input')
number.style.width = '45%'
number.style.height = '30px'
number.style.marginRight = '10px'

const generateButton = document.querySelector('#generate')
generateButton.style.backgroundColor = 'green'
generateButton.style.color = 'white'
generateButton.style.height = '30px'

generateButton.addEventListener('click', (e) => {
    console.log('test : ', number.value)
    if (number.value !== '' && !isNaN(number.value)) {
        for (let i = 0; i < parseInt(number.value); i++) {
            const myNumber = document.createElement('div')
            myNumber.style.height = '40px'
            myNumber.style.width = '100px'
            myNumber.style.border = '1px solid black'
            myNumber.style.marginRight = '10px'
            myNumber.style.marginBottom = '10px'
            myNumber.style.color = 'white'
            myNumber.style.fontSize = '40px'
            myNumber.style.textAlign = 'center'
            myNumber.style.fontWeight = 'bold'


            myNumber.style.backgroundColor = (isPrime(i)) ? 'red' : ((i % 2) === 0) ? 'green' : 'yellow'

            myNumber.innerHTML = i.toString()
            containerCases.appendChild(myNumber)
        }
    }
})

const containerCases = document.querySelector('#containerCases')
containerCases.style.display = 'flex'
containerCases.style.justifyContent = 'left'
containerCases.style.flexWrap = 'wrap'
containerCases.style.marginTop = '20px'
containerCases.style.width = '60%'
