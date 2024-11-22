const display = document.getElementById('display');

window.appendToDisplay = (value) => {
    display.value += value;
}

window.clearDisplay = () => {
    display.value = ' ';
}

window.calculate = () => {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

