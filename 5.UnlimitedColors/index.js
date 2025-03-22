// Generate a random color

const randomColor = function(){
    const hex = "1234567890ABCDEF";
    let color = '#';
    for(let i = 0;i< 6;i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervals;

const startChangeColor = function(){
  if(!intervals){
    intervals = setInterval(changeColor,1000);
  }
}

const changeColor = function(){
    document.body.style.backgroundColor = randomColor()
}

const stopChangeColor = function(){
    clearInterval(intervals);
    intervals = null;
}

document.getElementById("start").addEventListener('click',startChangeColor)

document.getElementById("stop").addEventListener('click',stopChangeColor);