let display = document.getElementById("display");
let cal_buttons = document.querySelectorAll("button");
let clear_btn = document.getElementById("btn-clear"); 
let clear_digit = document.getElementById("clear-cal");
let equals = document.getElementById("answer");
let percent = document.getElementById("percent")

function press(val){
    display.value+=val;
};

function clearScreen() {
   display.value = "";
}


function calculate() {
    let result = display.value;
    try {
        display.value = eval(result);
    } catch {
        display.value = "Syntax Error";
        setTimeout(() => display.value = "", 1000);
    }
}

function clearDigit(){
    display.value = display.value.slice(0, -1);
}

function power(){
    let square = display.value*display.value;
    if(display.value != ""){
        display.value = square;
     }else{
        display.value ="Insert value";
        setTimeout(() => display.value = "", 1000);
     }
}

function squareRoot() {
    let value = parseFloat(display.value);
    if (value >= 0) {
        display.value = Math.sqrt(value);
    } else if(value < 0) {
        display.value = "Error";
        setTimeout(() => display.value = "", 1000);
    }else {
        display.value = "Insert value";
        setTimeout(() => display.value = "", 1000);
    }
}

function percentage(){
    if (display.value === "") {
        display.value = "Insert value";
        setTimeout(() => display.value = "", 1000);
        return;
    }

    display.value = parseFloat(display.value) / 100;
}
document.getElementById("display").addEventListener("keydown", function (event) {

    const allowedKeys = [
        "0","1","2","3","4","5","6","7","8","9",
        "+","-","*","/","%","." 
    ];

    if (event.key === "Backspace") {
        clearDigit();     
        event.preventDefault();  
        return;
    }

    if (event.key === "Delete") {
        clearScreen();
        event.preventDefault();
        return;
    }

    if (event.key === "Enter") {
        calculate();
        event.preventDefault();
        return;
    }

    if (!allowedKeys.includes(event.key)) {
        event.preventDefault();
    }

    if (event.key === "%") {
    percentage(); 
    event.preventDefault();
    return;
}

});
