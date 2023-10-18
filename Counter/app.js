const value = document.getElementById('value');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');

var currValue = 0 ;

function decrement() {
    currValue-- ;
    value.textContent = currValue;
    colorChecker()
}
function increment() {
    currValue++ ;
    value.textContent = currValue;
    colorChecker()
}
function resetValue() {
    currValue = 0 ;
    value.textContent = currValue;
    colorChecker()
}

function colorChecker (){
    if (currValue > 0){
        value.style.color = 'Green'
    }
    else if ( currValue < 0) {
        value.style.color = 'red'
    }
    else {
        value.style.color = 'blue'
    }
}