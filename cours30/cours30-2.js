import { countries } from './countries.js'

countries.forEach((element) => {
    element.flag = element.flag.substring(0, element.flag.length - 4)
})

const numberCountries = document.querySelector('#numberCountries')
const countriesCityLanguages = document.querySelector('#countriesCityLanguages')

numberCountries.innerHTML = countries.length

const creerDivCountry = (country) => {
    const divCountry = document.createElement('div')

    divCountry.classList.add('divCountry')

    const imgFlag = document.createElement('img')
    imgFlag.src = country.flag

    imgFlag.style.width = '15rem'

    const pCountryName = document.createElement('p')
    pCountryName.innerHTML = country.name
    pCountryName.style.color = 'orange'

    const pCountryCapital = document.createElement('p')
    pCountryCapital.innerHTML = 'Capital: ' + country.capital

    const pCountryLanguages = document.createElement('p')
    pCountryLanguages.innerHTML = 'Languages: ' + country.languages.join(', ')

    const pCountryPopulation = document.createElement('p')
    pCountryPopulation.innerHTML = 'Population: ' + country.population

    divCountry.appendChild(imgFlag)
    divCountry.appendChild(pCountryName)
    divCountry.appendChild(pCountryCapital)
    divCountry.appendChild(pCountryLanguages)
    divCountry.appendChild(pCountryPopulation)

    countriesCityLanguages.appendChild(divCountry)
}

// Trier name

const buttonNameSort = document.querySelector('#buttonNameSort')
let booleenSortName = false

buttonNameSort.addEventListener('click', () => {
    countriesCityLanguages.innerHTML = ''
    console.log('buttonNameSort')

    if (booleenSortName) {
        countries.sort((a, b) => {
            if (a.name < b.name) {
                return 1
            }
            if (a.name > b.name) {
                return -1
            }
            return 0
        }).forEach((element) => {
            creerDivCountry(element)
        })
    } else {
        countries.sort((a, b) => {
            if (a.name < b.name) {
                return -1
            }
            if (a.name > b.name) {
                return 1
            }
            return 0
        }).forEach((element) => {
            creerDivCountry(element)
        })
    }

    booleenSortName = !booleenSortName
})

// Trier Capital

const buttonCapitalSort = document.querySelector('#buttonCapitalSort')
let booleenSortCapital = false

buttonCapitalSort.addEventListener('click', () => {
    countriesCityLanguages.innerHTML = ''
    console.log('buttonCapitalSort')

    if (booleenSortCapital) {
        countries.sort((a, b) => {
            if (a.capital < b.capital) {
                return 1
            }
            if (a.capital > b.capital) {
                return -1
            }
            return 0
        }).forEach((element) => {
            creerDivCountry(element)
        })
    } else {
        countries.sort((a, b) => {
            if (a.capital < b.capital) {
                return -1
            }
            if (a.capital > b.capital) {
                return 1
            }
            return 0
        }).forEach((element) => {
            creerDivCountry(element)
        })
    }
    booleenSortCapital = !booleenSortCapital
})

// Trier Population

const buttonPopulationSort = document.querySelector('#buttonPopulationSort')
let booleenSortPopulation = false

buttonPopulationSort.addEventListener('click', () => {
    countriesCityLanguages.innerHTML = ''
    console.log('buttonPopulationSort')

    if (booleenSortPopulation) {
        countries.sort((a, b) => {
            if (a.population < b.population) {
                return 1
            }
            if (a.population > b.population) {
                return -1
            }
            return 0
        }).forEach((element) => {
            creerDivCountry(element)
        })
    } else {
        countries.sort((a, b) => {
            if (a.population < b.population) {
                return -1
            }
            if (a.population > b.population) {
                return 1
            }
            return 0
        }).forEach((element) => {
            creerDivCountry(element)
        })
    }
    booleenSortPopulation = !booleenSortPopulation
})

// Search bar

const searchBar = document.querySelector('#searchText')
const satisfaction = document.querySelector('#satisfaction')
const numberSatisfaction = document.querySelector('#numberSatisfaction')

searchBar.addEventListener('input', () => {
    countriesCityLanguages.innerHTML = ''
    console.log('searchBar')

    const search = searchBar.value.toLowerCase()

    if (search === '') {
        satisfaction.style.display = 'none'
        countries.forEach((element) => {
            creerDivCountry(element)
        })
    } else {
        satisfaction.style.display = 'block'
        countries.forEach((element) => {
            if (element.name.toLowerCase().includes(search) || element.capital.toLowerCase().includes(search)) {
                creerDivCountry(element)
            } else {
                for (let i = 0; i < element.languages.length; i++) {
                    const element2 = element.languages[i]
                    if (element2.toLowerCase().includes(search)) {
                        creerDivCountry(element)
                        break
                    }
                }
            }
        })

        numberSatisfaction.innerHTML = countriesCityLanguages.childElementCount
    }
})

// Tous les pays
countries.forEach((element) => {
    creerDivCountry(element)
})
