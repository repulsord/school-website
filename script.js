const display = document.getElementById('display');

// Function to append value to the display
window.appendToDisplay = (value) => {
    display.value += value;
}

// Function to clear the display
window.clearDisplay = () => {
    display.value = '';
}

// Function to calculate the expression
window.calculate = () => {
    try {
        display.value = eval(display.value); // eval() is used to evaluate the expression
    } catch (error) {
        display.value = 'Error';
    }
}

// Keyboard input handler
window.addEventListener('keydown', (event) => {
    const key = event.key;

    // Handle number keys and basic arithmetic operators
    if ('0123456789'.includes(key)) {
        appendToDisplay(key);
    }
    else if (key === '.') {
        appendToDisplay('.');
    }
    else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    }
    else if (key === 'Enter') {
        calculate();
    }
    else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1); // Remove last character
    }
    else if (key === 'Escape') {
        clearDisplay(); // Clear display on 'Escape' key
    }
});
