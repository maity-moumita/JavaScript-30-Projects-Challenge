const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
            document.getElementById('blue').style.border = "2px solid white"
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id
            document.getElementById('red').style.border = "2px solid white"
        }
        if(e.target.id === 'crimson'){
            body.style.backgroundColor = e.target.id
            document.getElementById('crimson').style.border = "2px solid white"
        }
        if(e.target.id === 'teal'){
            body.style.backgroundColor = e.target.id
            document.getElementById('teal').style.border = "2px solid white"
        }
    })
})