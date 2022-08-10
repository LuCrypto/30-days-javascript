import { countries } from './countries.js'

const myContainer = document.querySelector('.myContainer')

myContainer.style.display = 'flex'
myContainer.style.flexDirection = 'column'
myContainer.style.alignItems = 'center'

const worldCountriesDataDiv = document.querySelector('#worldCountriesDataDiv')

worldCountriesDataDiv.style.width = '100%'
worldCountriesDataDiv.style.backgroundColor = '#f5f5f5'
worldCountriesDataDiv.style.display = 'flex'
worldCountriesDataDiv.style.flexDirection = 'column'
worldCountriesDataDiv.style.alignItems = 'center'

const worldCountriesDatat = document.querySelector('#worldCountriesData')

worldCountriesDatat.style.color = 'orange'
worldCountriesDatat.style.fontSize = '3.5rem'

const currently = document.querySelector('#currently')

currently.style.fontSize = '1.25rem'

const divButton = document.querySelector('#divButton')

divButton.style.display = 'flex'
divButton.style.justifyContent = 'center'

// Deuxieme partie

const deuxiemePartie = document.querySelector('#deuxiemePartie')

deuxiemePartie.style.marginTop = '20px'
deuxiemePartie.style.display = 'flex'
deuxiemePartie.style.flexDirection = 'column'
deuxiemePartie.style.alignItems = 'center'

const buttonPopulation = document.querySelector('#buttonPopulation')

buttonPopulation.style.backgroundColor = 'orange'
buttonPopulation.style.marginRight = '0.7rem'
buttonPopulation.style.border = 'none'
buttonPopulation.style.height = '2.5rem'
buttonPopulation.style.width = '5rem'
buttonPopulation.style.width = '10rem'

buttonPopulation.addEventListener('click', () => {
    // On vide le contenu de la div
    dataVisualisation.innerHTML = ''

    // On récupère les données de population, les noms des pays et les pourcentages
    const population = countries.map(country => country.population)
    const nom = countries.map(country => country.name)
    const numberWorld = population.reduce((a, b) => a + b)
    const pourcentage = population.map(pop => pop / numberWorld)

    // Tableau du nombre de population par pays
    // Le replace sert à mettre en forme le nombre
    const nombre = population.map(pop => pop.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '))

    for (let i = 0; i < 10; i++) {
        generateLine(nom[i], pourcentage[i], nombre[i])
    }
})

const buttonLanguages = document.querySelector('#buttonLanguages')

buttonLanguages.style.backgroundColor = 'orange'
buttonLanguages.style.marginRight = '0.7rem'
buttonLanguages.style.border = 'none'
buttonLanguages.style.height = '2.5rem'
buttonLanguages.style.width = '10rem'

buttonLanguages.addEventListener('click', () => {
    // On vide le contenu de la div
    dataVisualisation.innerHTML = ''
    const counterLanguages = {}

    const result = countries.reduce((arrayMerde, element) =>
        arrayMerde.concat(element.languages), [])

    result.map((element) => {
        if (counterLanguages[element]) {
            counterLanguages[element] += 1
        } else {
            counterLanguages[element] = 1
        }
        return 0
    })

    const arrayLanguages = []

    // Parcours le dictionnaire
    for (const key in counterLanguages) {
        arrayLanguages.push({
            language: key,
            nombre: counterLanguages[key]
        })
    }

    arrayLanguages.sort((a, b) => {
        return b.nombre - a.nombre
    })

    console.log(arrayLanguages)

    // const languagesNumber = arrayLanguages.reduce((somme, element) => somme + element.nombre, 0)

    let languagesNumberLocal = 0
    for (let i = 0; i < 10; i++) {
        languagesNumberLocal += arrayLanguages[i].nombre
    }

    for (let i = 0; i < 10; i++) {
        generateLine(arrayLanguages[i].language, arrayLanguages[i].nombre / languagesNumberLocal, arrayLanguages[i].nombre)
    }

    // dataVisualisation.innerHTML = result
})

const mostSpoken = document.querySelector('#mostSpoken')

mostSpoken.style.fontSize = '1.2rem'

// Troisieme partie

const dataVisualisation = document.querySelector('#dataVisualisation')

dataVisualisation.style.marginTop = '20px'
dataVisualisation.style.backgroundColor = '#f5f5f5'
dataVisualisation.style.width = '100%'
dataVisualisation.style.display = 'flex'
dataVisualisation.style.flexDirection = 'column'

const generateLine = (nom, pourcentage, nombre) => {
    const divLine = document.createElement('div')

    divLine.style.display = 'flex'
    divLine.style.width = '100%'
    divLine.style.textAlign = 'center'
    divLine.style.margin = '0'
    divLine.style.padding = '0'
    divLine.style.marginBottom = '0.5rem'

    const premierDiv = document.createElement('div')

    premierDiv.style.fontSize = '1.2rem'

    // flex-grow: 1; flex-shrink: 1; flex-basis: 0;
    premierDiv.style.flex = '1 1 0'

    const premierP = document.createElement('p')

    premierP.innerHTML = nom.toString()

    premierDiv.appendChild(premierP)
    divLine.appendChild(premierDiv)

    const premierDivPourcentage = document.createElement('div')
    const premierDivPourcentage2 = document.createElement('div')
    premierDivPourcentage.style.fontSize = '1.2rem'
    premierDivPourcentage.style.flexGrow = '1'
    premierDivPourcentage.style.display = 'flex'
    premierDivPourcentage.style.flex = '1 1 0'

    premierDivPourcentage2.style.width = (pourcentage * 100).toString() + '%'
    premierDivPourcentage2.style.backgroundColor = 'orange'
    premierDivPourcentage2.style.borderRadius = '0.5rem'

    premierDivPourcentage.appendChild(premierDivPourcentage2)

    divLine.appendChild(premierDivPourcentage)

    const troisiemeP = document.createElement('p')
    troisiemeP.innerHTML = nombre.toString()
    troisiemeP.style.fontSize = '1.2rem'
    troisiemeP.style.flexGrow = '1'
    troisiemeP.style.flex = '1 1 0'

    divLine.appendChild(troisiemeP)

    dataVisualisation.appendChild(divLine)
}

// Trier par ordre décroissant
countries.sort((a, b) => {
    return b.population - a.population
})

// const mondialePopulation = 7600878000

// for (let i = 0; i < 10; i++) {
//     console.log(countries[i].name)
//     console.log(countries[i].population)
//     generateLine(countries[i].name, countries[i].population / mondialePopulation, countries[i].population)
// }
