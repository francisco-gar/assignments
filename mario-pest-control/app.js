var goombaNumber = document.getElementById('goomba');
var lakituNumber = document.getElementById('lakitu');
var koopatroopaNumber = document.getElementById('koopatroopa');
var calculatePrice = document.querySelector('form');

calculatePrice.addEventListener('submit', function(e){
    e.preventDefault();
    var multiplyGoomba = goombaNumber.value * 5;
    var multiplyLakitu = lakituNumber.value * 7;
    var multiplyKoopatroopa = koopatroopaNumber.value * 11;
    var calculateSum = multiplyGoomba + multiplyKoopatroopa + multiplyLakitu;
    displayTotal(calculateSum);
    console.log(calculateSum);
})
function displayTotal(calculateSum){
    var wrapper = document.createElement('div');
    wrapper.setAttribute("id", "totaltotal")

    var coinTotal = document.createElement('p');
    coinTotal.textContent = calculateSum + ' Coins';
    if (document.contains(document.getElementById("totaltotal"))) {
        document.getElementById("totaltotal").remove();
    }   else {
        document.getElementById('total').appendChild(wrapper);  
    }
    wrapper.appendChild(coinTotal);
}
