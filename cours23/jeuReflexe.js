// click - when the element clicked
// dblclick - when the element double clicked
// mouseenter - when the mouse point enter to the element
// mouseleave - when the mouse pointer leave the element
// mousemove - when the mouse pointer move on the element
// mouseover - when the mouse pointer move on the element
// mouseout -when the mouse pointer out from the element
// input -when value enter to input field
// change -when value change on input field
// blur -when the element is not focused
// keydown - when a key is down
// keyup - when a key is up
// keypress - when we press any key
// onload - when the browser has finished loading a page

const tableauCible = []
let temps01 = 0

// Verif if all target are green
const verifAllGreen = () => {
    for (let i = 0; i < tableauCible.length; i++) {
        if (tableauCible[i].style.backgroundColor.localeCompare('rgb(0, 255, 0)') !== 0) {
            return false
        }
    }
    return true
}

const primary = document.querySelector('div')
primary.style.boxSizing = 'border-box'
primary.style.display = 'flex'
primary.style.flexWrap = 'wrap'

for (let i = 0; i < 70; i++) {
    const cible = document.createElement('div')
    tableauCible.push(cible)
    cible.style.backgroundColor = 'rgb(0,255,0)'
    cible.style.height = '103px'
    cible.style.width = '9%'
    cible.style.border = '1px solid black'
    cible.style.marginRight = '10px'
    cible.style.marginBottom = '10px'

    cible.setAttribute('id', i.toString())

    cible.addEventListener('click', (e) => {
        console.log(tableauCible[parseInt(e.target.id)].style.backgroundColor)
        tableauCible[parseInt(e.target.id)].style.backgroundColor = 'rgb(0, 255, 0)'
        console.log(tableauCible[parseInt(e.target.id)].style.backgroundColor)

        if (verifAllGreen()) {
            console.log('FIN')
            console.log('mon temps : ', (new Date().getTime() - temps01))
            console.timeEnd('time01')
            resultat.innerHTML = ((new Date().getTime() - temps01) / 1000).toString() + ' secondes'
        }
    })
    primary.appendChild(cible)
}

const boutons = document.createElement('div')
boutons.innerHTML = 'start'
boutons.style.backgroundColor = 'orange'
boutons.style.fontWeight = 'bold'
boutons.style.height = '50px'
boutons.style.width = '50px'
boutons.style.textAlign = 'center'

boutons.addEventListener('click', (e) => {
    if (verifAllGreen()) {
        console.log('start')

        // Faire de manière aléatoire
        for (let i = 0; i < 10; i++) {
            console.log('boucle')
            const indiceTab = Math.floor(Math.random() * tableauCible.length)
            if (tableauCible[indiceTab].style.backgroundColor.localeCompare('rgb(255, 0, 0)') === 0) {
                i--
            } else {
                tableauCible[indiceTab].style.backgroundColor = 'rgb(255, 0, 0)'
            }
        }

        console.time('time01')
        temps01 = new Date().getTime()
    }
})

document.body.appendChild(boutons)

const resultat = document.createElement('p')

document.body.appendChild(resultat)
