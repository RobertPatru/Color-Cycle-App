const container = document.querySelector('.container');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');
const bricksToAdd = document.querySelector('.number-of-bricks');
const submit = document.querySelector('.submit');

let firstNumber;
let secondNmber;
let thirdNumber;

let lastRed;
let lastGreen;
let lastBlue;

let count = 1;
// let lastCount = 0;
let output = '';
let saved = false;

red.addEventListener('keyup', changeValue);
green.addEventListener('keyup', changeValue);
blue.addEventListener('keyup', changeValue);

// red.addEventListener('keyup', validateInputMin);
// green.addEventListener('keyup', validateInputMin);
// blue.addEventListener('keyup', validateInputMin);
// bricksToAdd.addEventListener('keyup', validateInputMin);

red.addEventListener('keyup', validateInputMax);
green.addEventListener('keyup', validateInputMax);
blue.addEventListener('keyup', validateInputMax);



function validateInputMin(event) {
    if (event.target.value < 0)
        event.target.value = 0;
}

function validateInputMax(event) {
    if (event.target.value > 255)
        event.target.value = 255;

    console.log(event.target.value);
}

function changeValue() {
    saved = false;
    console.log('change');
    console.log(saved);
}

submit.addEventListener('click', () => {
    const numberOfbricksToAdd = Number(bricksToAdd.value) + 1;

    if (saved == false) {
        firstNumber = red.value;
        lastRed = firstNumber;

        secondNmber = green.value;
        lastGreen = secondNmber;

        thirdNumber = blue.value;
        lastBlue = thirdNumber;
        saved = true;
    }
    

    for ( ; count < numberOfbricksToAdd; count ++) {
       const div = document.createElement('div');
       div.classList.add('brick');

       if (lastBlue > 0) {
        lastBlue -= 2;
        } else if (lastGreen > 0)
         lastGreen -= 2;
        else if (lastRed > 0) 
         lastRed -= 2;
        else if (lastRed < 0)
         lastRed = 0;
          else if (lastGreen < 0)
         lastGreen = 0;
        else if(lastBlue < 0)
         lastBlue = 0;

        if (lastRed < 0)
            lastRed = 0;
        if (lastGreen < 0)
            lastGreen = 0;
        if (lastBlue < 0)
            lastBlue = 0;

        // lastCount++;
        
        container.appendChild(div);
        div.textContent = `rgb(${lastRed}, ${lastGreen}, ${lastBlue})`;        
        document.querySelector('.brick:last-child').style.backgroundColor = `rgb(${lastRed}, ${lastGreen}, ${lastBlue})`; 
    }
    count = 1;
});