if(5 > 3){
    console.log('is greater than')
}

if('cat'.length === 3){
    console.log('is the length')
}

if("cat" === 'dog'){
    console.log('catpoo')
} else {
    console.log('not the same')
}

var person = {
    name: "Bobby",
    age: 12
  }

if(person.age >= 18){
    console.log('is allowed to go to them movie')
} else {
    console.log('not allowed at movie')
}

if(person.name.charAt(0) === 'B') {
    console.log('you may enter')
} else {
    console.log('you may not enter')
}

if((person.name.charAt(0) === 'B') && person.age > 18) {
    console.log('you may enter')
} else {
    console.log('you may not enter')
}

if(1 === '1'){
    console.log(strict)
} else if (1 == '1'){
    console.log('loose')
} else {
    console.log('not equal at all')
}

if((1 <= 2) && 2 === 4){
    console.log('yes')
} else {
    console.log('no')
}

if(typeof 'dog' === 'string'){
    console.log('is a string')
}

if(typeof true === 'boolean'){
    console.log('is a boolean')
}

