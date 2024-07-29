
//GLOBAL VARS
let firstNumber = " ";
let secondNumber = " ";
let operator = " ";
let firstNumberFinished = false;
let secondNumberFinished = false;
let result = ' ';
let display = document.querySelector('.display');
let resultAlreadyCalculated= false;




//Restrict max number of decimal places to 10
/* function countDecimalPlaces(number) {
    const decimalIndex = number.toString().indexOf('.');
    let count = decimalIndex >= 0 ? number.toString().length - decimalIndex - 1 : 0;
    if (count > 10)
        {
    console.log(number.toFixed(10));
    return (number.toFixed(10));;
  }
else {return number}
} */

function countDecimalPlaces(number) {
    const decimalIndex = number.toString().indexOf('.');
    let count = decimalIndex >= 0 ? number.toString().length - decimalIndex - 1 : 0;
    if (count > 10)
        { let numberToTenDecimalPlaces = number.toFixed(10);
            let stringToNumber = parseFloat(numberToTenDecimalPlaces);
            return stringToNumber;
  }
else {

    return number}
}




//Mathematical functions
function add()

{   
    result = (firstNumber*1) + (secondNumber*1);//Convert strings to numbers
   result = countDecimalPlaces(result);//Result maintained as a number here
    display.innerText= result;
    firstNumber=result;
    return result;
}
   
function subtract(){
    {
        result = (firstNumber*1) - (secondNumber*1);//Convert strings to numbers
        result = countDecimalPlaces(result);//Result maintained as a number here
        display.innerText= result;
        firstNumber=result;
        return result;
        } 
 
 }

function divide()
 
 {
    result = (firstNumber*1) / (secondNumber*1);//Convert strings to numbers
    result = countDecimalPlaces(result);//Result maintained as a number here
    display.innerText= result;
    firstNumber=result;
    return result;
    
 }

function multiply() {

    result = (firstNumber*1) * (secondNumber*1);//Convert strings to numbers
    result = countDecimalPlaces(result);//Result maintained as a number here
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
const decimalPoint = document.querySelector('.decimal-point-btn');//needed?
const clear = document.querySelector('.clear-btn');


////calcButtonsContainer var for event delegation
const calcButtonsContainer = document.querySelector('.calc-buttons-container');

const buttons = document.querySelectorAll('button')


//Clear function
function clearAll() {
  
    firstNumber = " ";
    secondNumber = " ";
    operator = " ";
    firstNumberFinished = false;
    secondNumberFinished = false;//is this needed?
    result = ' ';
    display.innerText= '0';  //check this
    resultAlreadyCalculated= false;
console.log('clear all func working');



}

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
&& event.target.innerText !== "Clear")
//&& event.target.innerText !== "0" )//Should not be provided for here

{
    secondNumber=event.target.innerText;  
display.innerText= secondNumber;
} 

//Making provision for secondNum = zero here
/* DELETE??????????? else if (secondNumber === " "
&& firstNumberFinished === true
&& resultAlreadyCalculated === false
&& event.target.innerText !== "+"
&& event.target.innerText !== "-"
&& event.target.innerText !== "/"
&& event.target.innerText !== "x"
&& event.target.innerText !== "="
&& event.target.innerText !== "Clear")
//&& event.target.innerText === "0" ) //Should not be provided for here

{
  alert("You can't divide by 0!  Enter a different number.")
}  */




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
//Clear function event listener




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

          //Think these two conditions below are duplicated - use to provide for <1numbers
          //>0
          if (event.target.innerText==='='
          && operator==='/' 
          && resultAlreadyCalculated===false
        && secondNumber == 0
        ) //result doesn't exist until add is called!!!!
          { console.log('line 356 working'); 
            
            display.innerText="OMG, press 'Clear' and start again!";
         
          }
          
          
          
              else if (event.target.innerText==='='
              && operator==='/' 
              && resultAlreadyCalculated===true
            && secondNumber == 0) //add in condition for IF result exists!
              { console.log('line 370 working'); 
               
                display.innerText="OMG, press 'Clear' and start again!";
                
                 // resultAlreadyCalculated=true;
              }  
}
clear.addEventListener("click", clearAll);
operate();


})})

 