// for (let i = 0; i < 5; i++) {
//     const paragraphe = document.createElement('p')
//     paragraphe.innerHTML = 'Je suis un paragraphe'

//     document.body.appendChild(paragraphe)
// }

const monContainer = document.querySelector('.myContainer')

monContainer.style.display = 'flex'
monContainer.style.alignItems = 'center'
monContainer.style.flexWrap = 'wrap'

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

for (let i = 0; i < 100; i++) {
    const maDiv = document.createElement('div')

    const monPara = document.createElement('p')
    monPara.innerHTML = i.toString()
    monPara.style.fontSize = '20px'
    maDiv.appendChild(monPara)

    maDiv.style.textAlign = 'center'

    maDiv.style.backgroundColor = (isPrime(i)) ? 'rgb(253,94,83)' : ((i % 2) === 0) ? 'rgb(33,191,115)' : 'rgb(253,219,58)'
    maDiv.style.width = '100px'
    maDiv.style.height = '60px'
    maDiv.style.marginRight = '5px'
    maDiv.style.marginBottom = '5px'
    maDiv.style.color = 'white'

    monContainer.appendChild(maDiv)
}
