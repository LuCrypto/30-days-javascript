const boutonSubmit = document.querySelector('#boutonSubmit')

const inputFirstName = document.querySelector('#inputFirstName')
const inputLastName = document.querySelector('#inputLastName')
const inputEmail = document.querySelector('#inputEmail')
const inputPassword = document.querySelector('#inputPassword')
const inputTelephone = document.querySelector('#inputTelephone')
const inputBio = document.querySelector('#inputBio')

const errorFirstName = document.querySelector('#errorFirstName')
const errorLastName = document.querySelector('#errorLastName')
const errorMail = document.querySelector('#errorMail')
const errorPassword = document.querySelector('#errorPassword')
const errorTelephone = document.querySelector('#errorTelephone')
const errorBio = document.querySelector('#errorBio')

const stringErrorName = 'First name must be alphanumeric and contain at least 3 - 16 characters'
const stringErrorEmail = 'Email must be valid address, e.g. example@example.com'
const stringErrorPassword = 'Password must be alphanumeric (@, _ and - are also allowed) and between 6 - 20 characters'
const stringErrorTelephone = 'A valid Telephone number (11 digits and 333-333-3334)'
const stringErrorBio = 'Bio must contains only lowercase letters, underscores, hyphens and be 8 - 50 characters'

const maRegex = /^[A-Z][a-z]{2,15}$/g
const maRegexMail = /^[A-Za-z0-9]+@[A-Za-z]+\.[a-z]+$/g
const maRegexPassword = /^[A-Za-z0-9_@-]{6,20}$/g
const maRegexTelephone = /^\d{3}-\d{3}-\d{4}$/g
const maRegexBio = /^[a-z_-]{8,50}$/g

const arrayInput = [inputFirstName, inputLastName, inputEmail, inputPassword, inputTelephone, inputBio]
const arrayError = [errorFirstName, errorLastName, errorMail, errorPassword, errorTelephone, errorBio]
const arrayStringError = [stringErrorName, stringErrorName, stringErrorEmail, stringErrorPassword, stringErrorTelephone, stringErrorBio]
const arrayRegex = [maRegex, maRegex, maRegexMail, maRegexPassword, maRegexTelephone, maRegexBio]

const checkAllGreen = () => {
    for (let i = 0; i < arrayInput.length; i++) {
        if (arrayInput[i].style.border.localeCompare('1px solid green') !== 0) {
            return false
        }
    }

    return true
}

if (arrayInput.length === arrayError.length && arrayInput.length === arrayStringError.length && arrayInput.length === arrayRegex.length) {
    arrayInput.forEach((element, index) => {
        element.addEventListener('input', () => {
            console.log('value : ', element.value)
            if (element.value.match(arrayRegex[index])) {
                arrayError[index].style.display = 'none'
                arrayInput[index].style.border = '1px solid green'

                if (checkAllGreen()) {
                    boutonSubmit.style.backgroundColor = 'green'
                }
            } else {
                arrayError[index].style.display = 'block'
                arrayError[index].innerHTML = arrayStringError[index]
                arrayInput[index].style.border = '1px solid #ccc'
            }
        }
        )
    })
} else {
    console.log('Error in arrays')
}
