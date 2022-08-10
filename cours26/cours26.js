import { countries } from './countries.js'

document.body.style.margin = '0'
document.body.style.padding = '0'

const haut = document.querySelector('#haut')

haut.style.backgroundImage = "linear-gradient(rgba(0, 0, 255, 0.1), rgba(0, 0, 255, 0.1)), url('images/globe-2.jpg')"
haut.style.backgroundRepeat = 'no-repeat'
haut.style.backgroundSize = 'cover'
haut.style.width = '100%'

const myContainer = document.querySelector('.myContainer')

myContainer.style.display = 'flex'
myContainer.style.flexDirection = 'column'
myContainer.style.alignItems = 'center'

const pWorld = document.querySelector('#pWorld')

pWorld.style.fontSize = '5rem'
pWorld.style.color = 'white'
pWorld.style.fontWeight = 'bold'
pWorld.style.textAlign = 'center'
pWorld.style.letterSpacing = '1.25rem'

const pTotalNumber = document.querySelector('#pTotalNumber')

pTotalNumber.style.fontSize = '2rem'
pTotalNumber.style.fontWeight = 'bold'
pTotalNumber.style.color = 'white'
pTotalNumber.style.textAlign = 'center'

const spanNumberCountriesGlobal = document.querySelector('#spanNumberCountriesGlobal')

spanNumberCountriesGlobal.innerHTML = countries.length

const pCountriesStart = document.querySelector('#pCountriesStart')

pCountriesStart.style.textAlign = 'center'
pCountriesStart.style.fontSize = '1.5rem'
pCountriesStart.style.color = 'white'

const spanLetter = document.querySelector('#spanLetter')

spanLetter.style.color = 'red'

const spanNumberCoutriesLocal = document.querySelector('#spanNumberCoutriesLocal')

spanNumberCoutriesLocal.style.color = 'green'

// Buttons

const buttons = document.querySelector('#buttons')

buttons.style.display = 'flex'
buttons.style.justifyContent = 'center'
buttons.style.marginBottom = '1rem'

const startingWorldButton = document.querySelector('#startingWorldButton')

startingWorldButton.style.padding = '1rem'
startingWorldButton.style.textAlign = 'center'
startingWorldButton.style.backgroundColor = 'violet'
startingWorldButton.style.borderRadius = '0.5rem'
startingWorldButton.style.marginRight = '.4rem'
startingWorldButton.style.border = 'none'
startingWorldButton.style.color = 'white'

const searchWithButton = document.querySelector('#searchWithButton')

searchWithButton.style.padding = '1rem'
searchWithButton.style.textAlign = 'center'
searchWithButton.style.backgroundColor = 'violet'
searchWithButton.style.borderRadius = '0.5rem'
searchWithButton.style.marginRight = '.4rem'
searchWithButton.style.border = 'none'
searchWithButton.style.color = 'white'

const flecheBasButton = document.querySelector('#flecheBasButton')

flecheBasButton.style.padding = '1rem'
flecheBasButton.style.textAlign = 'center'
flecheBasButton.style.backgroundColor = 'violet'
flecheBasButton.style.borderRadius = '0.5rem'
flecheBasButton.style.border = 'none'

const searchBar = document.querySelector('#searchBar')

searchBar.style.display = 'flex'
searchBar.style.justifyContent = 'center'
searchBar.style.marginBottom = '1rem'

const inputBar = document.querySelector('#inputBar')

inputBar.style.width = '35%'
inputBar.style.borderRadius = '1.5rem'
inputBar.style.marginRight = '.4rem'
inputBar.style.border = 'none'
inputBar.style.height = '2.5rem'
inputBar.style.textAlign = 'center'

inputBar.addEventListener('input', function () {
    const inputBarValue = inputBar.value
    console.log(inputBarValue)

    if (inputBar.value !== '') {
        spanLetter.innerHTML = inputBarValue

        const filterCountries = countries.filter(country => country.name.toLowerCase().startsWith(inputBarValue.toLowerCase()))
        spanNumberCoutriesLocal.innerHTML = filterCountries.length

        listCountries.innerHTML = ''

        filterCountries.forEach((element) => {
            createCaseForCountry(element.name)
        })
    }
    else {
        spanLetter.innerHTML = '?'
        spanNumberCoutriesLocal.innerHTML = '?'
        // Display all countries
        countries.forEach(country => {
            createCaseForCountry(country.name)
        })
    }
})

const buttonSearch = document.querySelector('#buttonSearch')

buttonSearch.style.height = '2.5rem'
buttonSearch.style.cursor = 'pointer'

const listCountries = document.querySelector('#listCountries')

listCountries.style.display = 'flex'
listCountries.style.justifyContent = 'space-around'
listCountries.style.flexWrap = 'wrap'

const createCaseForCountry = (nameCountry) => {
    const divCountry = document.createElement('div')

    divCountry.style.display = 'flex'
    divCountry.style.alignItems = 'center'
    divCountry.style.justifyContent = 'center'

    divCountry.style.backgroundImage = "linear-gradient(rgba(0, 0, 255, 0.2), rgba(0, 0, 255, 0.2)), url('images/map_image.jpg')"
    divCountry.style.backgroundRepeat = 'no-repeat'
    divCountry.style.backgroundSize = 'cover'

    divCountry.style.letterSpacing = '0.1rem'
    divCountry.style.textTransform = 'uppercase'
    divCountry.style.width = '200px'
    divCountry.style.height = '200px'
    divCountry.style.textAlign = 'center'
    divCountry.style.boxShadow = '0 0 0.1rem 0.1rem black'
    divCountry.style.margin = '1rem'
    divCountry.style.fontSize = '1.75rem'
    divCountry.style.fontWeight = 'bold'
    divCountry.style.borderRadius = '0.5rem'
    divCountry.style.border = 'none'
    divCountry.style.cursor = 'pointer'
    divCountry.style.color = 'white'
    divCountry.style.padding = '1rem'

    divCountry.innerHTML = `<p>${nameCountry}</p>`

    listCountries.appendChild(divCountry)
}

// Display all countries
countries.forEach(country => {
    createCaseForCountry(country.name)
})
