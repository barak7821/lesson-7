// מערכים

// שאלה 1

function sortArray(arr) {
    return arr.sort()
}

arr = [5, 6, 8, 3, 1, 2]
console.log(sortArray(arr))

// 2 שאלה

function test1(arr1, arr2) {
    let commonValues = []

    for (let i = 0; i < arr1.length; i++) {
        let foundInArr2 = false

        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                foundInArr2 = true
                break
            }
        }

        let common = false
        for (let k = 0; k < commonValues.length; k++) {
            if (commonValues[k] === arr1[i]) {
                common = true
                break
            }
        }

        if (foundInArr2 === !common) {
            commonValues.push(arr1[i])
        }

    }

    return commonValues

}

let arr1 = [1, 2, 1, 2, 1]
let arr2 = [2, 2, 2, 1, 3, 1, 2]

console.log(test1(arr1, arr2))

// שאלה 3 

function averageOf(matrix) {
    let sum = 0
    let count = 0

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j]
            count++
        }
    }
    return sum / count
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
console.log(averageOf(matrix))

// שאלה 4

function test2(arr5, num) {
    let count = 0

    while (arr5.length > 0) {
        if (arr5[arr5.length - 1] === num) {
            arr5.pop()
            count++
        } else {
            arr5.pop()
        }
    }
    return count
}

let num = 2
let arr5 = [1, 2, 3, 2]

console.log(test2(arr5, num))


///////////////////////////////////////////////////////////////////////////////
//Arrow function

// שאלה 1 
const checkString = (string) => string.length > 5
console.log(checkString("Hello World"))

// שאלה 2
const testStr = (str) => {
    if(str[0] === str[str.length - 1]){
        return true
    } else {
        return false
    }
}

console.log(testStr("Hello World"))

// שאלה 3
const testStr2 = (str1) => {
    if (str1[str1.length - 1] === str1[str1.length - 1].toUpperCase()){
        return true
    } else {
        return false
    }
}

console.log(testStr2("Hello World"))


//////////////////////////////////////////////////////////////////////////////
// Map/forEach

// שאלה 1
function checkDivisible(arr) {
    let found = false

    arr.forEach((num, i) => {
        if (num % 3 === 0) {
            console.log("number " + num + " at index " + i)
            found = true
        }
    })

    if (!found) {
        console.log("The array is not divisible by 3")
    }
}

let numbers = [2, 3, 5, 6, 8, 9, 12, 14]
checkDivisible(numbers)


// שאלה 2

function checkLetterCase(arr) {
    let result = []

    arr.forEach(letter => {
        if (letter === letter.toUpperCase()) {
            result.push("U")
        } else {
            result.push("L")
        }
    })

    return result
}

let letters = ['A', 'B', 'c', 'd', 'E']
console.log(checkLetterCase(letters))


// שאלה 3


function replaceEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            arr[i] = i
        }
    }
    return arr
}

let arr = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(replaceEven(arr))


// filter
// שאלה 4 

function filterAges(ages) {
    return ages.filter(age => age > 18)
}

let ages = [15, 20, 17, 25, 30, 12, 18]
console.log(filterAges(ages))

// שאלה 5 

function removeIndex(arr11) {
    return arr1.filter((value, index) => index !== 3)
}

let arr11 = [2, 4, 1, 2, 7, 2, 8]
console.log(removeIndex(arr1))


// spread
// שאלה 6 

let names = ["Dani", "Jon", "Bob"]

function addName(name) {
    names = [...names, name]
}

addName('David')
console.log(names)

// שאלה 7 

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2]
}

let names1 = ["Dani", "Jon", "Bob"]
let names2 = ["James", "Michael", "Paul"]
console.log(mergeArrays(names1, names2))