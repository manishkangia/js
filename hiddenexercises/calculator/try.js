//oper1 and oper2 are two operands to operate on with performOperation
//memory is the main memory 
//expecting : 0 is for number 1 is for number/operator
var oper1 = 0;
var oper2 = 0;
var memory = 0;
var performOperation = "+";
var expecting = 0;

function clearScreen() {
    var screen = document.getElementById('screen');
    screen.value = "";
    expecting = 0;
}

function invertValue() {
    var screen = document.getElementById('screen');
    screen.value = 0 - screen.value;
}

//function to just append the entered number
function displayNumber(number) {
    var screen = document.getElementById('screen');
    screen.value = screen.value + number;
    expecting = 1;
} 

//function called on every entery of an operator and perform the last operation on oper1 and oper2
function operation(operator) {
    if(expecting == 1) {
    var screen = document.getElementById('screen');
    oper2 = parseFloat(screen.value);
    addSubMulDiv(oper2,performOperation);
    performOperation = operator ;
    screen.value = "";
    expecting = 0;
    }
    else {
    performOperation = operator ;
    }
    
}

//function to perform an operation on oper1 and oper2 and save result in oper1 and make oper2=0
function addSubMulDiv(oper2, performOperation) {
    oper1 = eval(oper1 + performOperation + oper2);
    oper2 = 0;
}

//function called when '=' is pressed
function displayResult() {
   
    var screen =  document.getElementById('screen');
    oper2 = parseFloat(screen.value);
    addSubMulDiv(oper2, performOperation);
    screen.value = oper1;
    oper1 = 0;
    oper2 = 0;
    performOperation = "+";
   
}

//function to add the value to the one in memory and start the next sequence of operations
function memoryPlus() {
    memoryOperation("+");
}

//function for subtracting from memory
function memoryMinus() {
   memoryOperation("-");
}

function memoryOperation(operate) {
    var screen =  document.getElementById('screen');
    
    
    memory = eval(memory + operate + screen.value);
       
    
    displayMemory();
}

//function to display memory
function displayMemory() {
    var screen = document.getElementById('screen');
    screen.value = memory;
    oper1 = oper2 = 0;
    performOperation = "+";
}

//function to clear the memory but retain the display
function memoryClear() {
    memory = oper1 = oper2 = 0;
    performOperation = "+";
}
