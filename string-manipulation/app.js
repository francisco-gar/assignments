var rs = require('readline-sync');


var firstName = rs.question('May I have your first name? \n');
var lastName = rs.question('May I have your last name? \n');
console.log('Hi ' + firstName + " " + lastName +'!');

var age = rs.questionInt('How old are you?\n');
console.log(age);

console.log('Hey ' + firstName + ' ' + lastName + ', ' + 'you are ' + age + ' ' + 'years old.');

var backgroundInfo = rs.question('Tell me about yourself and I\'ll try and recall\n')
var splitNumber = (backgroundInfo.length / 2);
var backgroundInfoSplit = backgroundInfo.slice(splitNumber);
console.log('The info you gave me was ' + backgroundInfo.length + 'characters long.')
console.log('This was what I could recall: ' + backgroundInfoSplit);

var numberOutput = rs.questionInt('Let\'s see if I can try to recall your background info again from a number of your choice [Number less than the character total]\n');
var backgroundInfoUserNum = (backgroundInfo.slice(numberOutput))
console.log(backgroundInfoUserNum);
