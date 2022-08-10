const myMainContainer = document.querySelector('.myMainContainer')
const text30Days = document.querySelector('#text30Days')

const changeColorBackground = () => {
    console.log('changeColorBackground')
    const couleurBackgroundRandom = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`

    document.body.style.backgroundColor = couleurBackgroundRandom
    myMainContainer.style.backgroundColor = couleurBackgroundRandom
}

const changeColorAllLetters = () => {
    console.log('changeColorAllLetters')
    const text = '30 DAYS OF JAVASCRIPT CHALLENGE 2022 LUC JAGER'
    const arrayLetters = text.split('')

    text30Days.innerHTML = ''

    arrayLetters.forEach((element) => {
        if (element !== '') {
            const span = document.createElement('span')

            span.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`

            span.innerHTML = element

            text30Days.appendChild(span)
        } else {
            text30Days.innerHTML += ' '
        }
    })

    // Deux solutions pour reset l'animation :

    // 1ère solution :
    // Forcer le refresh

    text30Days.classList.remove('classAnimation')
    // -> triggering reflow /* The actual magic */
    // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
    // Oops! This won't work in strict mode. Thanks Felis Phasma!
    // element.offsetWidth = element.offsetWidth;
    // Do this instead:
    // Permet de reset l'animation, un sorte de refresh hard
    // Cette ligne permet de demander les infos au navigateur sur le dom, pour connaitre ça le navigateur
    // doit abandonner ce qu'il est en train de faire : le plan de batching et redessiner/refresh la page
    // eslint-disable-next-line no-void
    void text30Days.offsetWidth

    text30Days.classList.add('classAnimation')

    // 2eme solution :
    // Forcer le refresh en ajoutant la classe une seule frame après

    // text30Days.classList.remove('classAnimation')
    // setTimeout(() => text30Days.classList.add('classAnimation'), 0)
}

changeColorBackground()
changeColorAllLetters()

setInterval(changeColorBackground, 3000)
setInterval(changeColorAllLetters, 3000)
