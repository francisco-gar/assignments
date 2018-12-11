var filterNumbers = [3, 6, 8, 2]

var fiveAndGreater = filterNumbers.filter(function filterNumbers(arr){
    return arr >= 5
})

console.log(fiveAndGreater)

var evenNum = filterNumbers.filter(function filterNumbers(arr){
    var mod = arr % 2 !== 1
    return mod
})

console.log(evenNum)

var animals = ['dog', 'wolf', 'by', 'family', 'eaten', 'camping']

var fiveChar = animals.filter(function animals(arr){
    return arr.length <= 5
})

console.log(fiveChar)

var yesNoIlluminati = [
    {
        name: 'Angelina Jolie',
        member: true
    },
    {
        name: 'Eric Jones',
        member: false
    },
    {
        name: 'Paris Hilton',
        member: true
    },
    {
        name: 'Kanye West',
        member: false
    },
    {
        name: 'Bob Ziroll',
        member: true
    }
]

var membersOnly = yesNoIlluminati.filter(function yesNoIlluminati(arr){
    return arr.member === true
})
console.log(membersOnly)

var potAud = [
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

var oldEnoughMatrix = potAud.filter(function potAud(arr){
    return arr.age >= 18
})
console.log(oldEnoughMatrix)