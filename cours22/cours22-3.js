import { asabenehChallenges2020 } from './challenges_info.js'

// Initialisation
const year = document.querySelector('h1')
const wrapper = document.body.querySelector('.wrapper')
const wrapper2 = document.createElement('div')
wrapper2.style.display = 'flex'
wrapper2.style.width = '60%'

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
    })

    const firstUl = document.querySelector('ul')
    firstUl.innerHTML = ''

    // Liste des challenges
    asabenehChallenges2020.challenges.forEach((element, index) => {
        const firstLi = document.createElement('li')

        const paragrapheForName = document.createElement('a')
        paragrapheForName.href = asabenehChallenges2020.challenges[index].githubUrl
        paragrapheForName.innerHTML = asabenehChallenges2020.challenges[index].name
        paragrapheForName.style.textAlign = 'left'
        paragrapheForName.style.flexGrow = '1'

        const paragrapheForTopics = document.createElement('details')

        for (let i = 0; i < asabenehChallenges2020.challenges[index].topics.length; i++) {
            const paraTopic = document.createElement('p')
            paraTopic.innerHTML = asabenehChallenges2020.challenges[index].topics[i]
            paragrapheForTopics.appendChild(paraTopic)
        }

        paragrapheForTopics.style.textAlign = 'center'
        paragrapheForTopics.style.flexGrow = '1'

        const paragrapheForStatus = document.createElement('p')
        paragrapheForStatus.innerHTML = asabenehChallenges2020.challenges[index].status
        paragrapheForStatus.style.textAlign = 'right'
        paragrapheForTopics.style.flexGrow = '1'

        firstLi.appendChild(paragrapheForName)
        firstLi.appendChild(paragrapheForTopics)
        firstLi.appendChild(paragrapheForStatus)

        if (asabenehChallenges2020.challenges[index].status.localeCompare('Done') === 0) {
            firstLi.style.backgroundColor = 'rgb(91,188,122)'
        } else if (asabenehChallenges2020.challenges[0].status.localeCompare('Ongoing') === 0) {
            firstLi.style.backgroundColor = 'rgb(247,220,92)'
        } else {
            firstLi.style.backgroundColor = 'rgb(235,105,91)'
        }

        firstLi.style.display = 'flex'
        firstLi.style.alignItems = 'center'
        firstLi.style.fontSize = '20px'
        firstLi.style.padding = '15px'
        firstLi.style.textAlign = 'left'
        firstLi.style.marginTop = '2px'
        firstLi.style.fontFamily = 'sans-serif'

        firstUl.appendChild(firstLi)
    })
}

const fnln = () => {
    // Nom prenom
    const firstNameLastName = document.createElement('p')
    firstNameLastName.innerHTML = asabenehChallenges2020.author.firstName + ' ' + asabenehChallenges2020.author.lastName
    firstNameLastName.style.fontSize = '40px'
    wrapper.appendChild(firstNameLastName)
}

const icones = () => {
    asabenehChallenges2020.author.socialLinks.forEach((element) => {
        const reseau = document.createElement('a')
        reseau.href = element.url
        reseau.innerHTML = element.social
        wrapper.appendChild(reseau)
    })
}

// Texte de description
const description = () => {
    const paraDescription = document.createElement('p')
    paraDescription.style.width = '50%'
    paraDescription.innerHTML = asabenehChallenges2020.author.bio
    wrapper.appendChild(paraDescription)
}

const titlesSkillsQualifs = (tableau, nom) => {
    const listeTitles = document.createElement('ul')
    listeTitles.style.listStyleType = 'none'
    listeTitles.style.paddingLeft = '0px'
    listeTitles.style.textAlign = 'left'
    listeTitles.style.flexGrow = '1'

    const title = document.createElement('li')
    title.innerHTML = nom
    title.style.textAlign = 'left'
    title.style.fontWeight = 'bolder'
    listeTitles.appendChild(title)

    tableau.forEach((element) => {
        console.log('element : ', element)
        console.log('element : ', typeof element)
        const liElement = document.createElement('li')

        liElement.innerHTML = (typeof element === 'object') ? element[0] + element[1] : element

        listeTitles.appendChild(liElement)
    })

    wrapper2.appendChild(listeTitles)
}

// const keywords = () => {

// }

// Subline h2
const h2 = document.querySelector('h2')
h2.style.textDecoration = 'underline'

centerElement()
colorLi()
fnln()
icones()
description()

wrapper.appendChild(wrapper2)

// Titles + Skills + Qualifications
titlesSkillsQualifs(asabenehChallenges2020.author.titles, 'Titles')
titlesSkillsQualifs(asabenehChallenges2020.author.skills, 'Skills')
titlesSkillsQualifs(asabenehChallenges2020.author.qualifications, 'Qualifications')

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

// keywords
const keywords = document.createElement('div')
keywords.classList.add('keywords')

keywords.style.display = 'flex'
keywords.style.alignItems = 'center'
keywords.style.flexDirection = 'column'

// Title
const titleKeywords = document.createElement('p')
titleKeywords.innerHTML = 'Keywords'
titleKeywords.style.width = '50%'
titleKeywords.style.textAlign = 'left'
titleKeywords.style.fontWeight = 'bold'
keywords.appendChild(titleKeywords)

// Words
const words = document.createElement('div')
words.classList.add('words')
words.style.display = 'flex'
words.style.flexWrap = 'wrap'

words.style.width = '50%'

asabenehChallenges2020.keywords.forEach((element) => {
    const elementKeyword = document.createElement('p')
    elementKeyword.innerHTML = element
    elementKeyword.style.backgroundColor = randomColorFunction()
    elementKeyword.style.borderRadius = '30px'
    elementKeyword.style.padding = '4px'
    elementKeyword.style.margin = '2px'
    elementKeyword.style.fontStyle = 'italic'
    elementKeyword.style.fontWeight = 'bold'
    words.appendChild(elementKeyword)
})

keywords.appendChild(words)

wrapper.appendChild(keywords)

// Put interval functions
setInterval(changeColorYear, 1000)
setInterval(changeBackgroundColorDateTime, 1000)
