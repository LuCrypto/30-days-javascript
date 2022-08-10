const buttonAddPlayer = document.querySelector('#buttonAddPlayer')
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const inputCountry = document.querySelector('#inputCountry')
const playerScore = document.querySelector('#playerScore')
const divPlayers = document.querySelector('#divPlayers')

buttonAddPlayer.addEventListener('click', function () {
    console.log('click')
    const monPlayer = document.createElement('div')

    monPlayer.style.padding = '1rem'
    monPlayer.style.backgroundColor = 'rgb(229, 201, 197)'
    monPlayer.style.marginBottom = '1rem'

    const divFirstLast = document.createElement('div')

    divFirstLast.style.display = 'flex'
    divFirstLast.style.flexDirection = 'column'
    divFirstLast.style.alignItems = 'center'

    divFirstLast.innerHTML = '<p>' + firstName.value + ' ' + lastName.value + '</p>' + '<p>' + new Date().toUTCString() + '</p>'

    const divCountry = document.createElement('div')

    divCountry.classList.add('divCountry')
    divCountry.style.display = 'flex'
    divCountry.style.flexDirection = 'column'
    divCountry.style.alignItems = 'left'

    divCountry.innerHTML = '<p>' + inputCountry.value + '</p>'

    const divScore = document.createElement('div')

    divScore.style.display = 'flex'
    divScore.style.flexDirection = 'column'
    divScore.style.alignItems = 'left'

    divScore.innerHTML = '<p>' + playerScore.value + '</p>'

    const divButtons = document.createElement('div')

    divButtons.style.display = 'flex'
    divButtons.style.alignItems = 'center'

    const buttonSupprimer = document.createElement('button')

    buttonSupprimer.innerHTML = '🗑'
    buttonSupprimer.style.backgroundColor = 'white'
    buttonSupprimer.style.borderRadius = '6rem'
    buttonSupprimer.style.border = 'none'
    buttonSupprimer.style.height = '65%'
    buttonSupprimer.style.width = '18%'
    buttonSupprimer.style.marginRight = '0.5rem'

    buttonSupprimer.addEventListener('click', function (e) {
        e.target.parentElement.parentElement.remove()
    })

    const buttonAddFive = document.createElement('button')

    buttonAddFive.innerHTML = '+5'
    buttonAddFive.style.backgroundColor = 'white'
    buttonAddFive.style.borderRadius = '6rem'
    buttonAddFive.style.border = 'none'
    buttonAddFive.style.height = '65%'
    buttonAddFive.style.width = '18%'
    buttonAddFive.style.marginRight = '0.5rem'

    buttonAddFive.addEventListener('click', function (e) {
        // Modify the score of the player
        const score = e.target.parentElement.parentElement.children[2].children[0].innerHTML
        e.target.parentElement.parentElement.children[2].children[0].innerHTML = parseInt(score) + 5
    })

    const buttonSubFive = document.createElement('button')

    buttonSubFive.innerHTML = '-5'
    buttonSubFive.style.backgroundColor = 'white'
    buttonSubFive.style.borderRadius = '6rem'
    buttonSubFive.style.border = 'none'
    buttonSubFive.style.height = '65%'
    buttonSubFive.style.width = '18%'
    buttonSubFive.style.marginRight = '0.5rem'

    buttonSubFive.addEventListener('click', function (e) {
        // Modify the score of the player
        const score = e.target.parentElement.parentElement.children[2].children[0].innerHTML
        e.target.parentElement.parentElement.children[2].children[0].innerHTML = parseInt(score) - 5
    })

    divButtons.appendChild(buttonSupprimer)
    divButtons.appendChild(buttonAddFive)
    divButtons.appendChild(buttonSubFive)

    monPlayer.appendChild(divFirstLast)
    monPlayer.appendChild(divCountry)
    monPlayer.appendChild(divScore)
    monPlayer.appendChild(divButtons)

    divPlayers.appendChild(monPlayer)
})
