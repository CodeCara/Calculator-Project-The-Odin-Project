
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
display.innerText= "hi";

//Remaining buttons variables
const add = document.querySelector('.add-btn');
const subtract = document.querySelector('.subtract-btn');
const equals = document.querySelector('.equals-btn"');
const decimalPoint = document.querySelector('.decimal-point-btn');
const clear = document.querySelector('.clear-btn"');



