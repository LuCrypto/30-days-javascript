const myContainer = document.querySelector('.myContainer')
myContainer.style.display = 'flex'
myContainer.style.flexDirection = 'column'
myContainer.style.alignItems = 'center'

const calculate = document.querySelector('#calculate')
calculate.style.backgroundColor = 'grey'
calculate.style.color = 'white'

document.body.style.backgroundImage = "url('images/galaxy.gif')"

calculate.addEventListener('click', () => {
    const weight = document.querySelector('#weight')

    if (weight.value !== '' && !isNaN(weight.value)) {
        const planetName = document.querySelector('#planetName')
        const selectPlanet = document.querySelector('#selectPlanet')
        const weightResult = document.querySelector('#weightResult')
        const imagePlanet = document.querySelector('#imagePlanet')

        planetName.innerHTML = selectPlanet.value
        weightResult.innerHTML = weight.value

        switch (selectPlanet.value) {
            case 'earth':
                imagePlanet.src = 'images/earth.png'
                break
            case 'mars':
                imagePlanet.src = 'images/mars.png'
                break
            case 'jupiter':
                imagePlanet.src = 'images/jupiter.png'
                break
            case 'saturn':
                imagePlanet.src = 'images/saturn.png'
                break
            case 'neptune':
                imagePlanet.src = 'images/neptune.png'
                break
            case 'uranus':
                imagePlanet.src = 'images/uranus.png'
                break
        }
    }
})