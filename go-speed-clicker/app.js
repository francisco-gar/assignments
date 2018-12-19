//get

var span = document.querySelector('span');
var button = document.querySelector('button')

var clicked = localStorage.getItem('clicked') || 0;
span.textContent = clicked;


window.addEventListener('click', function(e) {
    if(e.target.id === 'reset') {
        clicked = 0;
    } else {
        clicked++
    }
    // clicked++
    localStorage.setItem('clicked', clicked)
    span.textContent = clicked;
})

