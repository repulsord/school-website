const display = document.getElementById('display');

window.appendToDisplay = (value) => {
    display.value += value;
}

window.clearDisplay = () => {
    display.value = ' ';
}

window.calculate = () => {
    try {
        display.value = eval(display.value); // eval() is used to evaluate the expression, yeah, that simple - Elias
    } catch (error) {
        display.value = 'Error';
    }
}

