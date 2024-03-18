const defaultResult = 0;
let currentResult = defaultResult;
const logEntries = [];

  
//Retreives userValue and converts Into Integer
//Because Default userInput is in String Format
function getUserNumber(){
    return parseInt(userInput.value);
}
//Calculation Log
function output(operator, resultBeforeCalc, resultAfterCalc){
    const calcDecription = `${resultBeforeCalc} ${operator} ${resultAfterCalc}`;
    outputResult(currentResult, calcDecription); //function from vendor.js file

}

function addToLog(operationIdentifier, prevResult, operationNumber, newResult){
    const logEntry = {
        operation: operationIdentifier,
        prevValue: prevResult,
        enteredNumber: operationNumber,
        result: newResult 
    };
    logEntries.push(logEntry);
    console.log(logEntries.operation);
    console.log(logEntries);
}
function calculate(calculationType){
    const userValue = getUserNumber();
    const initialNumber = currentResult;
    
    if(calculationType === 'ADD'){
        currentResult += userValue; 
        // currentResult = currentResult + userValue;
        //currentResult++;
        operator = '+';
    }
    else if(calculationType === 'SUBTRACT'){
        currentResult -= userValue; 
        //currentResult = currentResult - userValue;
        //currentResult--;
        operator = '-'; 
    }
    else if(calculationType === 'MULTIPLY'){
        currentResult *= userValue;   
        //currentResult = currentResult * userValue;
        operator = '*';
    }
    else if(calculationType === 'DIVIDE'){
        if(!userValue){
            return;
        }
        currentResult /= userValue;  
        //currentResult = currentResult / userValue;
        operator = '/';
    }
    output(operator, initialNumber, userValue);
    addToLog(calculationType, initialNumber, userValue, currentResult);
}

//function for adding two numbers
function add(){
    calculate('ADD');
}

//function for subtracting two numbers
function subtract(){
    calculate('SUBTRACT');
}

//function for multiplying two numbers
function multiply(){
    calculate('MULTIPLY');
}

//function for dividing two numbers
function divide(){
    calculate('DIVIDE');
}


//Adding Event Listener so that when we click button 
//particualr function needs to be executed 
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
