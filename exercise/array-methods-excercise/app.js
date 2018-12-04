var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

var popVegetables = vegetables.pop();

console.log(popVegetables);

var shiftedFruit = fruit.shift();

console.log(shiftedFruit);

var index = fruit.indexOf("orange");

console.log(index);

fruit.push(index);

console.log(fruit);

var vegetablesLength = vegetables.length

vegetables.push(vegetablesLength);

console.log(vegetables);

var food = fruit.concat(vegetables);

console.log(food);

food.splice(4, 2);

console.log(food);

food.reverse();

console.log(food);

food.join(",");

console.log(food.join(","));