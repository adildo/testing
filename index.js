function capitalize(string) {
    let firstLetter = string[0].toUpperCase();
    return firstLetter + string.slice(1)
} 
function reverseString(string) {
    return string.split('').reverse().join("")
}

const calculator = {
    add: (a, b) =>  a + b,
    subtract: (a, b) =>  a - b,
    multiply:  (a, b) =>  a * b,
    divide: (a, b) => {
        return b === 0 ?  'cannot divide by 0' : a / b ;
    }
}

const caesarCipher = (string) => {
    const allLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    function findIndex (char) {
        return allLetters.indexOf(char)
    }
    function changeChar(indexOfCurrent, steps) {
        if (indexOfCurrent + steps > 25) {
            const reminder = (indexOfCurrent + steps) - 25
            return allLetters[reminder-1]
        } else {
            return allLetters[indexOfCurrent + steps]
        }
    }

    const string1 = string.toLowerCase().split('')
    let result = ""
    string1.forEach(char => {
        if (char === " ") {
            result += char
        } else {
            const index = findIndex(char)
            const newChar = changeChar(index, 5)
            result += newChar
        }
    })
    return result
}

const analyzeArray = (array) => {
    const avg = () => {
        return array.reduce((prev, current) => { return prev + current}, 0)/array.length
    }
    const min = () => {
        return array.sort((a,b) => {return a-b})[0];  
    }
    const max = () =>  {
        return array.sort((a,b) => {return a-b})[array.length - 1]
    }
    const length = () => {
        return array.length
    }
    const ans = {
        average: avg(), 
        min: min(),
        max: max(),
        length: length()
    }
    return ans
}

export {capitalize, reverseString, calculator, caesarCipher, analyzeArray}

