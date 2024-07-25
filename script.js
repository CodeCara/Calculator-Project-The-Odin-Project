
//Mathematical functions
function add(a,b){
console.log(a+b);
return (a+b);
}

function subtract(a,b){
    console.log(a-b);
    return (a-b);
}

function divide(a,b){
    console.log(a/b);
    return (a/b);
 ;
}

function multiply(a,b){
    console.log(a*b);
    return(a*b);

}



//Operate function is not working properly YET
function operate () {
let firstNumber = " ";//" " assign emp strings later
let operator = " ";//might need to figure out a way to destringify
let secondNumber = " "; 

 let result = " "; //firstNumber+operator+secondNumber HOW TO PUT THIS TOGETHER.  template literal?
console.log(result);
return result;


}
console.log(operate());

//Number buttons allocated to variables
const one = document.querySelector('.one-btn');
const two = document.querySelector('.two-btn');
const three = document.querySelector('.three-btn');
const four = document.querySelector('.four-btn');
const five = document.querySelector('.five-btn');
const six = document.querySelector('.six-btn');
const seven = document.querySelector('.seven-btn');
const eight = document.querySelector('.eight-btn');
const nine = document.querySelector('.nine-btn');

//Display variable
let display = document.querySelector('.display');
//let text = display.innerText=("sfds").  This was a TEST, delete later

//Remaining buttons variables (slightly different names used to distinguish from math functions)
const plus = document.querySelector('.plus-btn');
const minus = document.querySelector('.minus-btn');
const equals = document.querySelector('.equals-btn');
const decimalPoint = document.querySelector('.decimal-point-btn');
const clear = document.querySelector('.clear-btn');

////calcButtonsContainer var for event delegation
const calcButtonsContainer = document.querySelector('.calc-buttons-container');

//code below works!!!!!!!!!
let firstNumber = " ";
let secondNumber = " ";
let firstNumberFinished = false;
//let clearDisplayForSecondNumber = false;

const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
button.addEventListener("click", (event) => {
    
let eventTargetText = event.target.innerText;

//console.log(eventTarget.innerText);
 if(firstNumber === " "
    && firstNumberFinished === false)
  
    {firstNumber=eventTargetText;
        console.log(eventTargetText);
    display.innerText=firstNumber;
}


else if (firstNumber !== " "
    && eventTargetText !== '+'
    && eventTargetText !== '-'
    && eventTargetText !== 'x'
    && eventTargetText !== '/'
    && eventTargetText !== 'Clear'
    && firstNumberFinished === false
) 
{firstNumber+=eventTargetText;
    display.innerText=firstNumber;
console.log(firstNumber);//firstNumber is  string at this point
console.log(typeof(firstNumber));

}



if (eventTargetText === '+'
|| eventTargetText === '-'
|| eventTargetText === 'x'
|| eventTargetText === '/'
|| eventTargetText === 'Clear'
)//check if should be included
{firstNumberFinished=true;
    eventTargetText = "";
}

if(secondNumber === " "
&& firstNumberFinished === true)

{secondNumber=eventTargetText;
    console.log(secondNumber + '2nd number');
display.innerText= secondNumber;
}


else if (secondNumber !== " "
&& firstNumberFinished === true
) 
{secondNumber+=eventTargetText;
display.innerText=secondNumber;
console.log(secondNumber);//firstNumber is  string at this point
console.log(typeof(secondNumber));

}





















})})

