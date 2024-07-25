
let firstNumber = " ";
let secondNumber = " ";
let operator = " ";
let firstNumberFinished = false;


let display = document.querySelector('.display');
//Mathematical functions
function add(){
    let resultOfAdd = (firstNumber*1) + (secondNumber*1);
    display.innerText= resultOfAdd;
    return (resultOfAdd);
}

function subtract(){
    let resultOfSubtract = (firstNumber*1) - (secondNumber*1);
    display.innerText= resultOfSubtract;
    return (resultOfSubtract);
}

function divide(){
    let resultOfDivide = (firstNumber*1)/(secondNumber*1);
    display.innerText= resultOfDivide;
    return (resultOfDivide);
 
}

function multiply(){
    let resultOfMultiply = (firstNumber*1)*(secondNumber*1);
    display.innerText= resultOfMultiply;
    console.log(resultOfMultiply);
    return (resultOfMultiply);

}







//Operate function is not working properly YET


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

//let text = display.innerText=("sfds").  This was a TEST, delete later

//Remaining buttons variables (slightly different names used to distinguish from math functions)
const plus = document.querySelector('.plus-btn');
const minus = document.querySelector('.minus-btn');
const equals = document.querySelector('.equals-btn');
const decimalPoint = document.querySelector('.decimal-point-btn');
const clear = document.querySelector('.clear-btn');

////calcButtonsContainer var for event delegation
const calcButtonsContainer = document.querySelector('.calc-buttons-container');







const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
button.addEventListener("click", (event) => {
    
let eventTargetText = event.target.innerText;

//console.log(eventTarget.innerText);
 if(firstNumber === " "
    && firstNumberFinished === false)
  
    {firstNumber=eventTargetText;
        firstNumber=firstNumber*1;//conversion to string
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
//|| eventTargetText === 'Clear'
)//check if should be included

{firstNumberFinished=true;
    operator=eventTargetText;
    
   
   display.innerText===eventTargetText;//PUT BACK IN to get rid of NaN
   operator=eventTargetText;
   console.log(operator);
}

if(secondNumber === " "
&& firstNumberFinished === true
&& eventTargetText !== "+"
&& eventTargetText !== "-"
&& eventTargetText !== "/"
&& eventTargetText !== "x"
&& eventTargetText !== "="
&& eventTargetText !== "Clear" )








{secondNumber=eventTargetText;
    secondNumber=secondNumber*1;
    console.log(secondNumber);//conversion to string
  
display.innerText= secondNumber;
}




else if (secondNumber !== " "
&& firstNumberFinished === true
&& eventTargetText !== "+"
&& eventTargetText !== "-"
&& eventTargetText !== "/"
&& eventTargetText !== "x"
&& eventTargetText !== "="
&& eventTargetText !== "Clear" )


//NEW LINE TO STOP = BEING INCLUDED IN 2ND NUMBER
 
{secondNumber+=eventTargetText;
  
//secondNumber=secondNumber*1;//conversion to string
console.log(secondNumber);
secondNumber=secondNumber*1;
display.innerText=secondNumber;
console.log(secondNumber);//firstNumber is  string at this point
console.log(typeof(secondNumber));

}



//OPERATE Function, MOVE SOMEWHERE ELSE? VARS UNDEFINED ATM

function operate ()
{
if (eventTargetText==='='

&& operator==='+') 
{add()}

else if (eventTargetText==='='

&& operator==='-') 
{subtract()}

else if (eventTargetText==='='

&& operator==='x') 
{multiply()}

else if (eventTargetText==='='

&& operator==='/') 
{divide()}



}



operate();
















})})


  