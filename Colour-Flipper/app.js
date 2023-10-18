const colors = ['#eaff7b', '#00ffab', '#29bdc1', '#d84242', '#913f92'];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function colorFlipper() {
    var randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber]; 
};