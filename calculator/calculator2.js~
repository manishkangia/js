//oper1 and oper2 are tow operands to operate on with performOperation
//memory is the main memory 
//expecting tells whats the expected input now ( number or operator/number )
var oper1 = 0, oper2 = 0, memory = 0, performOperation = "?";
var expecting = "number";

//function to just append the entered number or clear or invert(+/-)
function displayNumber(number) {
    var screen = document.getElementById('screen');
    if (number == "clear") {
        screen.value = "";
        expecting = "number";
    }
        else if (number == 'invert') {
            screen.value = 0 - screen.value;
        }
        else {
            screen.value = screen.value + number;
            expecting = "operator/number";
        } 
}

//function called on every entery of an operator and perform the last operation on oper1 and oper2
function operation(operator) {
    var screen = document.getElementById('screen');
    if (expecting == "operator/number" && performOperation != "?") {
        oper2 = parseFloat(screen.value);
        addSubMulDiv(oper2,performOperation);
        performOperation = operator ;
        screen.value = "";
        expecting = "number";
    }
    
    else if (performOperation == "?") {
        oper1 = parseFloat(screen.value);
        performOperation = operator;
        screen.value = "";
        expecting = "number";
    }
    
    else if (expecting == "number" && performOperation != "?") {
        performOperation = operator;
        screen.value = "";
    } 
}

//function to perform an operation on oper1 and oper2 and save result in oper1 and make oper2=0
function addSubMulDiv(oper2, performOperation) {
    if (performOperation == '+')
        oper1 = oper1 + oper2;
    if (performOperation == '-')
        oper1 = oper1 - oper2;
    if (performOperation == '*')
        oper1 = oper1 * oper2;
    if (performOperation == '/')
        oper1 = oper1 / oper2;
    oper2 = 0;
}

//function called when '=' is pressed
function displayResult() {
    var screen =  document.getElementById('screen');
    oper2 = parseFloat(screen.value);
    addSubMulDiv(oper2, performOperation);
    screen.value = oper1;
    oper2 = 0;
    performOperation = "?";
}

//function to add the value to the one in memory and start the next sequence of operations
function memoryPlus() {
    var screen =  document.getElementById('screen');
    //if memoryPlus is called after evauation of an expression
    if (performOperation == "?") {
        memory = memory + parseFloat(screen.value);
    }
    //if memoryPlus is called after evauation of an expression    
        else if(performOperation != "?") {
            displayResult();
            memory = memory + oper1;
            oper1 = oper2 = 0;
            performOperation = "?";
        }
    
    screen.value = "";
}

//function for subtracting from memory
function memoryMinus() {
    var screen =  document.getElementById('screen');
    //if memoryMinus is called after evauation of an expression
    if (performOperation=="?") { 
        memory = memory - parseFloat(screen.value);}
        //if memoryMinus is called before evaluating an expression
        else if(performOperation!="?") {
            displayResult();
            memory = memory - oper1;
            oper1 = oper2 = 0 ;
            performOperation = "?";
    }
 
    screen.value = "";
}
//function to display memory
function displayMemory() {
    var screen = document.getElementById('screen');
    screen.value = memory;
    memoryClear();
}
//function to clear the memory but retain the display
function memoryClear() {
    memory = oper1 = oper2 = 0;
    performOperation = "?";
}
