var doubleNumbers = [2, 5, 100];

var multiplyByTwo = doubleNumbers.map(function(doubleNumber){
    return doubleNumber * 2
})

console.log(multiplyByTwo)

var stringItUp = doubleNumbers.map(function(doubleNumber){
    return doubleNumbers.toString()
})

console.log(stringItUp);

var capitalizeNames = ['john','JACOB', 'jinGleHeimer', 'schmidt'];

var capitalizedNames = capitalizeNames.map(function capitalizeName(arr){
    return arr.slice(0, 1).toUpperCase() + arr.substr(1).toLowerCase()
})
console.log(capitalizedNames)

var namesOnly = [
    {
        name: 'Angelina Jolie',
        age: 80
    },
    {
        name: 'Eric Jones',
        age: 2
    },
    {
        name: 'Kanye West',
        age: 16
    },
    {
        name: 'Bob Ziroll',
        age: 100
    }
]

var getNames = namesOnly.map(function nameOnly(arr){
    return arr.name
})

console.log(getNames)

var goingMatrix = namesOnly.map(function namesOnly(arr){
    return arr.name + ' can go to the Matrix'
})
console.log(goingMatrix)

var readyToPutInTheDOM = namesOnly.map(function namesOnly(arr){
    return '<h1>' + arr.name + '</h1>' + '<h2>' + arr.age + '</h2>'
})

console.log(readyToPutInTheDOM)
// String.prototype.capitalize = function(str){
//     return str.toUpperCase(0)
// }

// var nameCap = 'mathias'

// console.log(nameCap)