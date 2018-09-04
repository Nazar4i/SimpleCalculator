var num1 = 0;
var num2 = 0;
var operation = "";
var numbers = document.querySelectorAll(".num-btn");
var operations = document.querySelectorAll(".math-btn");
var clear = document.querySelector(".clear-btn");
var reset = document.querySelector(".reset-btn");
var resultField = document.querySelector(".result-field");
var isOperationClick = false;
var isEqualClick = false;
var fco = 0;

resultField.value = "0";

clear.onclick = function() {
    resultField.value = resultField.value.substring(0, resultField.value.length - 1);
};

reset.onclick = function() {
    isOperationClick = false;
    isEqualClick = false;
    fco = 0;
    num1 = 0;
    num2 = 0;
    operation = "";

    resultField.value = "0";
};

for(var i = 0; i < numbers.length; i++) {
    numbers[i].onclick = function() {

        if (isOperationClick) {
            num1 = parseFloat(resultField.value);
            resultField.value = " ";
        }

        if(resultField.value.toString().indexOf(".") === -1 ) {
            if(resultField.value === "0" && this.innerHTML !== ".") {
                resultField.value = this.innerHTML;
                isOperationClick = false;
            } else {
                resultField.value += this.innerHTML;
                isOperationClick = false;
            }
        } else if (this.innerHTML !== ".") {
            resultField.value += this.innerHTML; 
        }
        
    }
}

for(var i = 0; i < operations.length; i++) {
    operations[i].onclick = function() {
       if (fco === 0) {
           fco++;
           num1 = parseFloat(resultField.value);
           operation = this.innerHTML;
           isOperationClick = true;
           
       } else {
           if(this.innerHTML !== "=") {
               if(!isEqualClick) {
                   num2 = parseFloat(resultField.value);
                   resultField.value = calc(operation, num1, num2);
                   operation = this.innerHTML;
                   num2 = parseFloat(resultField.value);
                   isOperationClick = true; 
                   isEqualClick = false;
               } else {
                    isEqualClick = false;
                    operation = this.innerHTML;
               }
           } else {
                num2 = parseFloat(resultField.value);
                resultField.value = calc(operation, num1, num2);
                operation = this.innerHTML;
                num1 = parseFloat(resultField.value);
                isOperationClick = true; 
                isEqualClick = true;
           }
       }
    }
}

function calc(operation, num1, num2) {
    var result = 0;

    switch (operation) {
        case"+":
            result = num1 + num2;
            break;

        case"-":
            result = num1 - num2;
            break;

        case"*":
            result = num1 * num2;
            break;

        case"/":
            if(num2 > 0) {
                result = num1 / num2;
            }
            break;
        case"%":
            result = (num1 * num2)/100;
            break;
        case"√":
            result = Math.sqrt(num1);
            break;
    }
    return result;
}