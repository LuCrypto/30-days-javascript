const contentCreatorText = document.querySelector('#contentCreatorText')
const testImage = document.querySelector('#testImage')

const arrayContent = ['Content Creator', 'Motivation', 'Motivational Speaker', 'Instructor', 'Programmer', 'Educator']
const pathImageContent = ['folder.png', 'flame.png', 'speaker.png', 'instru.png', 'programmer.png', 'Educator.png']

contentCreatorText.addEventListener('animationiteration', () => {
    const index = Math.floor(Math.random() * arrayContent.length)

    contentCreatorText.innerHTML = arrayContent[index]
    testImage.setAttribute('src', 'images/' + pathImageContent[index])
})

const technoText = document.querySelector('#technoText')
const arrayTechnos = ['Python', 'C', 'Javascript', 'CSS', 'HTML']

technoText.addEventListener('animationiteration', () => {
    const index = Math.floor(Math.random() * arrayTechnos.length)

    technoText.innerHTML = arrayTechnos[index].toUpperCase()
    technoText.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
})
