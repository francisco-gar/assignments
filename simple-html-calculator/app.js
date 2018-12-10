var addForm1 = document.getElementById("firstAdd");
var addForm2 = document.getElementById("secondAdd");
var addCalculation = document.getElementById("additionResult");

// var mathSumAdd = +addForm1.value + +addForm2.value;
addCalculation.addEventListener("click", function(e){
    e.preventDefault();
    var mathSumAdd = +addForm1.value + +addForm2.value;
    displayAnswer(mathSumAdd);
})

var subtractForm1 = document.getElementById("firstSubtract");
var subtractForm2 = document.getElementById("secondSubtract");
var subtractCalculation = document.getElementById("subtractionResult");

subtractCalculation.addEventListener("click", function(e){
    e.preventDefault();
    var mathSumSubtract = +subtractForm1.value - +subtractForm2.value;
    displayAnswer(mathSumSubtract);
})

var multiplicationForm1 = document.getElementById("firstMultiply");
var multiplicationForm2 = document.getElementById("secondMultiply");
var multiplyCalculation = document.getElementById("multiplicationResult")

multiplyCalculation.addEventListener("click", function(e){
    e.preventDefault();
    var mathSumMultiply = +multiplicationForm1.value * +multiplicationForm2.value;
    displayAnswer(mathSumMultiply);
})

function displayAnswer(value){
    var wrapper = document.createElement('div');
    var coinTotal = document.createElement('p');
   

    coinTotal.textContent = value.;
    ageLabel.textContent = data.age;

    wrapper.appendChild(fnameLabel);
    wrapper.appendChild(ageLabel);
    list.appendChild(wrapper);

}