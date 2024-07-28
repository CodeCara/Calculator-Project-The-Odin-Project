
//GLOBAL VARS
let firstNumber = " ";
let secondNumber = " ";
let operator = " ";
let firstNumberFinished = false;
let secondNumberFinished = false;
let result = ' ';
let display = document.querySelector('.display');
let resultAlreadyCalculated= false;


//Mathematical functions

//GET ADD FUNCTION WORKING FIRST, THEN UPDATE THE OTHERS
function add()

{   
    result = (firstNumber*1) + (secondNumber*1);
    display.innerText= result;
    firstNumber=result;
    return result;
}
   
function subtract(){
    {
        result = (firstNumber*1) - (secondNumber*1);
        display.innerText= result;
        firstNumber=result;
        return result;
        } 
 
 }

function divide()
 
 {
    result = (firstNumber*1) / (secondNumber*1);
    display.innerText= result;
    firstNumber=result;
    return result;
    
 }

function multiply() {

    result = (firstNumber*1) * (secondNumber*1);
    display.innerText= result;
    firstNumber=result;
    return result;
   
 
 }

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

//Remaining buttons variables (slightly different names used to distinguish from math functions)
const plus = document.querySelector('.plus-btn');
const minus = document.querySelector('.minus-btn');
const equals = document.querySelector('.equals-btn');
const decimalPoint = document.querySelector('.decimal-point-btn');
const clear = document.querySelector('.clear-btn');


////calcButtonsContainer var for event delegation
const calcButtonsContainer = document.querySelector('.calc-buttons-container');

const buttons = document.querySelectorAll('button')



function setNumbers(){    
 if (firstNumberFinished===true) {
    getSecondNumber();
  }
    

    else if(firstNumber === " "
        && firstNumberFinished === false)
      
        {
            firstNumber=event.target.innerText;
        display.innerText=firstNumber;
    }
    
    
    //SECOND firstNumLoop ON SCREEN AFTER SECOND CLICK!
    else if (firstNumber !== " "
        && event.target.innerText !== '+'
        && event.target.innerText !== '-'
        && event.target.innerText !== 'x'
        && event.target.innerText !== '/'
        && event.target.innerText !== 'Clear'
        && firstNumberFinished === false
    ) 
    {firstNumber+=event.target.innerText;
        display.innerText=firstNumber;
        firstNumberFinished === true;
    }

   // result = (firstNumber*1) + (secondNumber*1);
  
}


function getSecondNumber() {if (secondNumber === " "
&& firstNumberFinished === true
&& resultAlreadyCalculated === false
&& event.target.innerText !== "+"
&& event.target.innerText !== "-"
&& event.target.innerText !== "/"
&& event.target.innerText !== "x"
&& event.target.innerText !== "="
&& event.target.innerText !== "Clear" )

{
    secondNumber=event.target.innerText;  
display.innerText= secondNumber;
} 

else if 
 ( firstNumberFinished === true
 
&& event.target.innerText !== "+"
&& event.target.innerText !== "-"
&& event.target.innerText !== "/"
&& event.target.innerText !== "x"
&& event.target.innerText !== "="
&& event.target.innerText !== "Clear")

{
    
secondNumber+=event.target.innerText; 
//secondNumber=secondNumber*1;
display.innerText=secondNumber;
secondNumberFinished=true;

} 

    }


buttons.forEach(button => {
button.addEventListener("click", (event) => {
 setNumbers();
 


//FIRST OP LOOP/CONDITION
if ((event.target.innerText === '+'
|| event.target.innerText === '-'
|| event.target.innerText === 'x'
|| event.target.innerText === '/')
&& firstNumberFinished === false)


{firstNumberFinished=true;
    operator=event.target.innerText;
   

  
}


else if ((event.target.innerText === '+'
|| event.target.innerText === '-'
|| event.target.innerText === 'x'
|| event.target.innerText === '/') 
&& (firstNumberFinished===true
&& resultAlreadyCalculated===true))


{
     operator=event.target.innerText;
   secondNumber=' ';
   getSecondNumber();
   console.log(firstNumber);
    operator=event.target.innerText;
}
 

//OPERATE Function

function operate ()
{
if (event.target.innerText==='='
&& operator==='+' 
&& resultAlreadyCalculated===false) //result doesn't exist until add is called!!!!
{
   add(); 
    resultAlreadyCalculated=true;
}



    else if (event.target.innerText==='='
    && operator==='+' 
    && resultAlreadyCalculated===true) //add in condition for IF result exists!
    {firstNumberFinished===true;
        setNumbers();///new line to reset 2nd number
        add(); 
       // resultAlreadyCalculated=true;
    }


    //SUBTRACT
    if (event.target.innerText==='='
    && operator==='-' 
    && resultAlreadyCalculated===false) //result doesn't exist until add is called!!!!
    {
       subtract(); 
        resultAlreadyCalculated=true;
    }
    
    
    
        else if (event.target.innerText==='='
        && operator==='-' 
        && resultAlreadyCalculated===true) //add in condition for IF result exists!
        {firstNumberFinished===true;
            setNumbers();///new line to reset 2nd number
            subtract(); 
           // resultAlreadyCalculated=true;
        }


         //MULTIPLY
    if (event.target.innerText==='='
    && operator==='x' 
    && resultAlreadyCalculated===false) //result doesn't exist until add is called!!!!
    {
       multiply(); 
        resultAlreadyCalculated=true;
    }
    
    
    
        else if (event.target.innerText==='='
        && operator==='x' 
        && resultAlreadyCalculated===true) //add in condition for IF result exists!
        {firstNumberFinished===true;
            setNumbers();///new line to reset 2nd number
            multiply(); 
           // resultAlreadyCalculated=true;
        }

      //DIVIDE
      if (event.target.innerText==='='
      && operator==='/' 
      && resultAlreadyCalculated===false) //result doesn't exist until add is called!!!!
      {
         divide(); 
          resultAlreadyCalculated=true;
      }
      
      
      
          else if (event.target.innerText==='='
          && operator==='/' 
          && resultAlreadyCalculated===true) //add in condition for IF result exists!
          {firstNumberFinished===true;
              setNumbers();///new line to reset 2nd number
              divide(); 
             // resultAlreadyCalculated=true;
          }



}

operate();


})})