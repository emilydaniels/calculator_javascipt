function c(val) {
    document.getElementById("d").value = val;
}

function v(val) {
    document.getElementById("d").value += val;
}

function e() {
    try {
        c(eval(document.getElementById("d").value))
    } catch (e) {
        c('Error')
    }
}

var display = document.getElementById("d");
var buttons = document.getElementsByClassName("button");

Array.prototype.forEach.call(buttons, function(button) {
    button.addEventListener("click", function() {
        if (button.textContent != "√" &&
            button.textContent != "x ²" &&
            button.textContent != "%" &&
            button.textContent != "sin" &&
            button.textContent != "cos" &&
            button.textContent != "tan" &&
            button.textContent != "log") {
            display.value += button.textContent;
        } else if (button.textContent === "%") {
            percent();
        } else if (button.textContent === "x ²") {
            square();
        } else if (button.textContent === "√") {
            squareRoot();
        } else if (button.textContent === "sin") {
            sin();
        } else if (button.textContent === "cos") {
            cos();
        } else if (button.textContent === "tan") {
            tan();
        } else if (button.textContent === "log") {
            log();
        }
    });
});



function square() {
    display.value = eval(display.value * display.value);
}

function squareRoot() {
    display.value = Math.sqrt(display.value);
}

function percent() {
    display.value = display.value / 100;
}

function sin() {
    display.value = Math.sin(display.value);
}

function cos() {
    display.value = Math.cos(display.value);
}

function tan() {
    display.value = Math.tan(display.value);
}

function log() {
    display.value = Math.log10(display.value);
}