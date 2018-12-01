var str = 'Francisco Garcia'

var newStr = str.toUpperCase();

console.log(newStr)

var lowStr = str.toLowerCase()

console.log(lowStr)

var lastOf = str.lastIndexOf('Francisco')

console.log(lastOf)

var startOf = str.indexOf('Garcia')
console.log(startOf)

var autoTypes = 'suv, truck, sedan, coupe, van'

var autoSlice = autoTypes.slice(10)

console.log(autoSlice)

var autoSub = autoTypes.substr(-3)

console.log(autoSub)

var rep = autoTypes.replace('suv', 'motorcycle')

console.log(rep)

var autoSpl = autoTypes.split("")
console.log(autoSpl)

var animals = "dog, cat, lion, tiger"

var plants = "tree, bush, flower, grass"

var bio = animals.concat(" ", plants)

console.log(bio)

var rhyme = 'can, van, span, spam'
var an
var anMatch = rhyme.match(/an/g)
console.log(anMatch)
