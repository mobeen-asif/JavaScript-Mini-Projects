const colors = ['#eaff7b', '#00ffab', '#29bdc1', '#d84242', '#913f92'];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

let previousRandomNumber = -1; 

function colorFlipper() {
    let randomNumber;
    
    do {
        randomNumber = Math.floor(Math.random() * colors.length);
    } while (randomNumber === previousRandomNumber);
    
    previousRandomNumber = randomNumber;
    
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber]; 
};