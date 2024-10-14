
function appendCharacter(character) {
    document.getElementById("display").value += character;
}


function clearDisplay() {
    document.getElementById("display").value = "";
}


function deleteChar() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.slice(0, -1);
}


function calculateResult() {
    try {
        let display = document.getElementById("display").value;
        let result = eval(display); // Evaluate the expression in the display
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}