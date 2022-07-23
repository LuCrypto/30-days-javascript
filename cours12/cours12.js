// // // without flag
// // let pattern = 'love'
// // let flag = 'gi'

// // // The same declaration in two ways
// // let regEx = new RegExp(pattern, flag)
// // let regEx2 = /love/gi

// // console.log("regEx : ", regEx)
// // console.log("regEx : ", regEx2)


// const str = 'I love JavaScript'
// const pattern = /love/

// // Renvoie vrai si trouvé sinon false
// const result = pattern.test(str)

// // Renvoie l'indice de la chaine trouvée ou -1
// const result4 = str.search(pattern)

// // match et exec sont les mêmes fonctions
// // -> match c'est la méthode de la chaine ciblée
// // -> exec c'est la mathode du pattern utilisé
// const result2 = pattern.exec(str)
// const result3 = str.match(pattern)

// console.log(result)
// console.log(result4)
// console.log(result2)
// console.log(result3)

// const txt = 'Python is the most beautiful language that a human begin has ever created.\
// I recommend python for a first programming language'

// let matchReplaced = txt.replace(/Python|python/g, 'JavaScript')

// console.log(matchReplaced)

// const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
// T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
// p%e%o%ple.\
// I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
// D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

// let matches = txt.replace(/%/g, '')
// console.log(matches)


// const pattern = /[Aa]pple/g // this square bracket means either A or a
// const txt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
// const matches = txt.match(pattern)

// console.log(matches)

// const pattern = /\d+/g  // d is a special character which means digits
// const txt = 'This regular expression example was made in January 12,  2020.'
// const matches = txt.match(pattern)

// console.log(matches)  // ["1", "2", "2", "0", "2", "0"], this is not what we want

// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /\b[a-zA-Z]{4}\b/g  //  exactly four character  words without numbers
// const matches = txt.match(pattern)
// console.log(matches)  //['This', 'made']

// function annualIncome() {
//     const texte = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month'
//     let pattern = /\d{4,5}/g
//     let result = texte.match(pattern)

//     console.log(parseInt(result[0]))
//     console.log(parseInt(result[1]))
//     console.log(parseInt(result[2]))
//     console.log((parseInt(result[0]) + parseInt(result[2])) * 12)
//     console.log(parseInt(result[1]))

//     return (parseInt(result[0]) + parseInt(result[2])) * 12 + parseInt(result[1])
// }

// console.log(annualIncome())

// let points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// let sortedPoints = [-4, -3, -1, -1, 0, 2, 4, 8]
// let distance = 12

// function furthestParticles() {
//     let minimum = Math.min.apply(Math, sortedPoints)
//     let maximum = Math.max.apply(Math, sortedPoints)

//     console.log(minimum)
//     console.log(maximum)

//     if (minimum > 0) {
//         return maximum - minimum
//     }
//     else {
//         if (maximum > 0) {
//             return maximum - minimum
//         }
//         else {
//             return minimum - maximum
//         }
//     }
// }

// console.log(furthestParticles())


// function is_valid_variable(string) {
//     let pattern = /^first[_]?name/g
//     console.log(pattern.test(string))
// }

// // Goal
// is_valid_variable('first_name')  // True
// is_valid_variable('first-name')  // False
// is_valid_variable('1first_name') // False
// is_valid_variable('firstname')   // True

// Récupère les 10 mots les plus fréquents
function tenMostFrequentWords(paragraph = '') {
    let dict = {}

    let pattern = /[A-Za-z]+/gi
    let result = paragraph.match(pattern)
    console.log(result)

    for (let i = 0; i < result.length; i++) {
        let mot = result[i].toLowerCase()
        dict.hasOwnProperty(mot) ? dict[mot]++ : dict[mot] = 1
    }

    console.log(dict)

    let sortable = [];
    for (var element in dict) {
        console.log(element)
        sortable.push([element, dict[element]]);
    }

    sortable.sort(function (a, b) {
        return b[1] - a[1];
    });

    console.log(sortable)
}

// let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
// tenMostFrequentWords(paragraph)

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

function cleanText(sentence) {
    let pattern = /[%$@#;&!?]/g

    return sentence.replace(pattern, '')
}

console.log(cleanText(sentence))

tenMostFrequentWords(cleanText(sentence))