const display = document.getElementById('display');

window.appendToDisplay = (value) => {
    display.value += value;
}

window.clearDisplay = () => {
    display.value = ' ';
}

window.calculate = () => {
    try {
        display.value = eval(display.value); // Im not even joking, this is what does all the calculations - Elias
    } catch (error) {
        display.value = 'Error';
    }
}

