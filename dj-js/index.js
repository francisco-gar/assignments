var box = document.querySelector('.box');

box.addEventListener('mouseover', function(e){
    e.target.style.backgroundColor = 'blue';
})

box.addEventListener('mouseout', function(e){
    e.target.style = 'none';
})

box.addEventListener('mousedown', function(e){
    e.target.style.backgroundColor = 'red';
    })

box.addEventListener('mouseup', function(e){
    e.target.style.backgroundColor = 'yellow';
})

box.addEventListener('dblclick', function(e){
    e.target.style.backgroundColor = 'green';
})

window.addEventListener('wheel', function(e){
    box.style.backgroundColor = 'orange';
})

window.addEventListener('keyup', function(e){
    if(e.which === 82){
        box.style.backgroundColor = 'red';
    }
})

window.addEventListener('keyup', function(e){
    if(e.which === 84){
        box.style.backgroundColor = 'turquoise';
    }
})

// if(e.keycode === 82){
    
