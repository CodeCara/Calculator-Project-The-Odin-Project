
//GLOBAL VARS
let firstNumber = " ";
let secondNumber = " ";
let firstOperator = " ";
let secondOperator = " ";
let firstNumberFinished = false;
let secondNumberFinished = false;
let result = ' ';
let display = document.querySelector('.display');
let currentCalculation = document.querySelector('.current-calculation');
let resultAlreadyCalculated= false;
let equalsActivated = false;



function countDecimalPlaces(number) {
    const decimalIndex = number.toString().indexOf('.');
    let count = decimalIndex >= 0 ? number.toString().length - decimalIndex - 1 : 0;
    if (count > 10)
        { let numberToTenDecimalPlaces = number.toFixed(6);
            let stringToNumber = parseFloat(numberToTenDecimalPlaces);
            return stringToNumber;
  }
else {

    return number}
}




//MATHEMATICAL FUNCTIONS
function add()

{   
    
    
    result = (firstNumber*1) + (secondNumber*1);
   result = countDecimalPlaces(result);//Result maintained as a number here
   display.innerText= result;
   currentCalculation.innerText=result;//this made result appear correctly 1 aug !
   //
    firstNumber=result;
    firstOperator=secondOperator;//is this correct?? ?think so
    secondOperator=" ";
    resultAlreadyCalculated===true;
    return result;
}
  
function subtract()

{  
    
    result = (firstNumber*1) - (secondNumber*1);
   result = countDecimalPlaces(result);//Result maintained as a number here
   display.innerText= result;
   currentCalculation.innerText=result;//this made result appear correctly 1 aug !
    firstNumber=result;
    firstOperator=secondOperator;//is this correct?? ?think so
    secondOperator=" ";
    resultAlreadyCalculated===true;
    return result;
}

function multiply()

{  
    
    result = (firstNumber*1) * (secondNumber*1);
   result = countDecimalPlaces(result);//Result maintained as a number here
   display.innerText= result;
   currentCalculation.innerText=result;//this made result appear correctly 1 aug !
    firstNumber=result;
    firstOperator=secondOperator;//is this correct?? ?think so
    secondOperator=" ";
    resultAlreadyCalculated===true;
    return result;
}


function divide()



   
{
    
    result = (firstNumber*1) / (secondNumber*1);
   result = countDecimalPlaces(result);//Result maintained as a number here
   display.innerText= result;
   currentCalculation.innerText=result;//this made result appear correctly 1 aug !
    firstNumber=result;
    firstOperator=secondOperator;//is this correct?? ?think so
    secondOperator=" ";
    resultAlreadyCalculated===true;
    return result;
}


//!Function created to avoid infinite loop within the operate function
function equalsButton()

{operate();}
 


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
const equals = document.querySelector('.equals-btn');//delete?
const decimalPoint = document.querySelector('.decimal-point-btn');//needed?
const clear = document.querySelector('.clear-btn');


////calcButtonsContainer var for event delegation
const calcButtonsContainer = document.querySelector('.calc-buttons-container');

const buttons = document.querySelectorAll('button')


//Clear function
function clearAll() {
  
    equalsActivated=false;
    firstNumber = " ";
    secondNumber = " ";
    operator = " ";
    firstNumberFinished = false;
    secondNumberFinished = false;//is this needed?
    result = ' ';
    display.innerText= '0';  
    display.style.color="black";
    display.style.fontSize="46px";
    currentCalculation.innerText= '0';  //check this
    resultAlreadyCalculated= false;
   




}

function setNumbers(){    
 if (firstNumberFinished===true) {
    getSecondNumber();
  }
    
    //CAPTURE FIRST DIGIT OF FIRST NUMBER
    else if(firstNumber === " "
        && firstNumberFinished === false)
      
        {
            firstNumber=event.target.innerText;
        display.innerText=firstNumber;
        currentCalculation.innerText=firstNumber;
    }
    
    
    //CAPTURE REMAINING DIGITS OF FIRST NUMBER
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
        currentCalculation.innerText=firstNumber;
        firstNumberFinished === true;
    }

  
}


function getSecondNumber() {if (secondNumber === " "
&& firstNumberFinished === true
&& event.target.innerText !== "+"
&& event.target.innerText !== "-"
&& event.target.innerText !== "/"
&& event.target.innerText !== "x"
&& event.target.innerText !== "="
&& event.target.innerText !== "Clear")

{
    secondNumber=event.target.innerText;  
display.innerText= secondNumber;
currentCalculation.innerText+=secondNumber;
} 


else if 
 ( firstNumberFinished === true
 && secondNumber !== " "
&& event.target.innerText !== "+"
&& event.target.innerText !== "-"
&& event.target.innerText !== "/"
&& event.target.innerText !== "x"
&& event.target.innerText !== "="
&& event.target.innerText !== "Clear")

{
secondNumber+=event.target.innerText; 
display.innerText=secondNumber;
currentCalculation.innerText+=event.target.innerText;
} 

    }




//EVENT LISTENERS FOR BUTTONS
buttons.forEach(button => {
button.addEventListener("click", (event) => {
 setNumbers();

 if (equalsActivated === true && event.target.innerText !== 'Clear')
    {display.innerText = "ERROR. Start again.";
 display.style.fontSize="35px";
display.style.color="red";
        currentCalculation.innerText = " ";
       
        
    }








//CAPTURE FIRST NUMBER
if ((event.target.innerText === '+'
|| event.target.innerText === '-'
|| event.target.innerText === 'x'
|| event.target.innerText === '/'
|| event.target.innerText === '=')//don't think this is needed?
&& firstNumberFinished === false)


{firstNumberFinished=true;
    firstOperator=event.target.innerText;
   currentCalculation.innerText+=firstOperator;
}

//TRIGGER OPERATE FUNCTION IF A SECOND OPERATOR OR '=' IS PRESSED
else if ((event.target.innerText === '+'
|| event.target.innerText === '-'
|| event.target.innerText === 'x'
|| event.target.innerText === '/' 
||event.target.innerText === '=' 
&& secondOperator === " ")) 

{
     secondOperator=event.target.innerText;
     secondOperator==="+";//why is this line here?
     secondNumber===" ";
     getSecondNumber();
     operate();
     display.innerText=result;
     currentCalculation.innerText=result+firstOperator;
   secondNumber=' ';
}

//FOR CURRENT CALCULATION?
else if (event.target.innerText === '=' 

&& secondNumber!=0
&& secondOperator === " ") 

{
   
     secondOperator=event.target.innerText;
     secondOperator==="+";
     secondNumber===" ";
     getSecondNumber();
     operate();
     secondNumber=' ';
}

else if (secondNumber === '0' //Bug fix 2 Aug 24
//else if (event.target.innerText === '0'
&& firstOperator==='/')


{      
    display.style.fontSize="25px";
    display.style.color="red";
     display.innerText='Dividing by zero?  Really?  Try again!';
     currentCalculation.innerText=" ";

}


else if (event.target.innerText==='=') {
   operate();
    }


function operate ()

{

//ADD  
if ((firstOperator==='+') 
&& (secondOperator==='='
|| secondOperator==='+'
|| secondOperator==='-'
|| secondOperator==='x'
|| secondOperator==='/'

))

 {
   add(); 
    resultAlreadyCalculated=true;
}   

//SUBTRACT
if ((firstOperator==='-') 
    && (secondOperator==='='
    || secondOperator==='+'
    || secondOperator==='-'
    || secondOperator==='x'
    || secondOperator==='/'
    
    ))
    
    
     {
       subtract(); 
        resultAlreadyCalculated=true;
    }

//MULTIPLY
if ((firstOperator==='x') 
            
    && (secondOperator==='='
    || secondOperator==='+'
    || secondOperator==='-'
    || secondOperator==='x'
    || secondOperator==='/'
            
    ))
            
            
        {
            multiply(); 
            resultAlreadyCalculated=true;//Possibly redundant code now
         }
        

//DIVIDE
if ((firstOperator==='/') 
       
    && (secondOperator==='='
    || secondOperator==='+'
    || secondOperator==='-'
    || secondOperator==='x'
    || secondOperator==='/'
            
     ))
            
            
        {
        
        divide(); 
        resultAlreadyCalculated=true;//Possibly redundant code now

        }

if (firstOperator==='=')
    {
       
    equalsActivated=true;
    equalsButton();}//or Operate?  Both do the same thing...



if (secondOperator==='=')
    {  equalsActivated===true;
                
        }
         
         

    
}
clear.addEventListener("click", clearAll);
//operate();


})})

 