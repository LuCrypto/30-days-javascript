// function outerFunction() {
//     let count = 0;
//     function innerFunction() {
//         count++
//         return count
//     }

//     return {
//         test: innerFunction()
//     }

// }
// const innerFunc = outerFunction()

// console.log(innerFunc.test)
// console.log(innerFunc.test)
// console.log(innerFunc.test)

// // console.log(outerFunction()())
// // console.log(outerFunction()())

// // ============================================================================

// console.log("==============")

// function outerFunction2() {
//     let count = 0;
//     function plusOne() {
//         count++
//         return count
//     }
//     function minusOne() {
//         count--
//         return count
//     }

//     return {
//         plusOne: plusOne,
//         minusOne: minusOne
//     }
// }
// const innerFuncs = outerFunction2()

// console.log(innerFuncs.plusOne())
// console.log(innerFuncs.plusOne())
// console.log(innerFuncs.plusOne())
// console.log(innerFuncs.minusOne())

// function niveau1() {
//     let compteur = 0

//     function niveau2() {
//         compteur -= 1
//         function niveau3() {
//             compteur *= 2
//             return compteur
//         }
//         return {
//             niveau3: niveau3
//         }
//     }
//     return {
//         niveau2: niveau2
//     }
// }

// const result = niveau1()

// console.log(result.niveau2().niveau3())


function personAccount() {
    let firstName = 'luc'
    let lastName = 'bg'
    let incomes = 0
    let expenses = 0

    function totalIncome() {
        return incomes
    }

    function totalExpense() {
        return expenses
    }

    function accountInfo() {
        return firstName + ', ' + lastName
    }

    function addIncome(ajout) {
        if (typeof ajout == 'number' && ajout > 0) {
            incomes += ajout
        }
    }

    function addExpense(ajout) {
        if (typeof ajout == 'number') {
            expenses += ajout
        }
    }

    function accountBalance() {
        return (incomes - expenses)
    }

    return {
        totalIncome: totalIncome,
        totalExpense: totalExpense,
        accountInfo: accountInfo,
        addIncome: addIncome,
        addExpense: addExpense,
        accountBalance: accountBalance
    }
}

const result = personAccount()

console.log(result.totalIncome())
console.log(result.totalExpense())
console.log(result.accountInfo())
console.log(result.addIncome(2))
console.log(result.addExpense(4))
console.log(result.accountBalance())