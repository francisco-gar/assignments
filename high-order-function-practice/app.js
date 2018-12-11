// function callTime(){
//     console.console.log(1++);
//   }
  
//  var redundantInterval = setInterval(callTime, 1000)

// var seconds

// element.addEvent

var animals = ['dog', 'cat', 'beast', 'mouse', 'dragon', 'donkey', 'snake']

// for(var i = 0; i < animals.length; i++)
//     console.log(animals[i])

// // animals.forEach(function(animal){
// //     console.log(animal)
// // })

//.map

// var newAnimals = animals.map(function(animal){
//     return 'new ' + animal;
// })
 
// console.log(newAnimals)

// var dAnimals = animals.filter(function(animal){
//     return animal[0] === 'd';
// })

// console.log(dAnimals)

// var animal = animals.find(function(animal){
//     return animal[0] === 'd'
// })

// console.log(animal)

var hasFirstLetterD = animals.some(function(animal){
    return animal === 'dog';
})

console.log(hasFirstLetterD)


