const display = document.getElementById("display");

// Function to append value to the display
window.appendToDisplay = (value) => {
    display.value += value;
};

// Function to clear the display
window.clearDisplay = () => {
    display.value = "";
};

// Function to calculate the expression
window.calculate = () => {
    try {
        display.value = math.evaluate(display.value); // Safely evaluate the expression
    } catch (error) {
        display.value = 'Error'; // Handle invalid input
    }
};

function warnDumbUser() {
    console.log("Warning user");
    let promptUser = prompt("Did you really think that was going to work?");
    promptUser = promptUser.toLowerCase();
    if (promptUser == "no") {
    alert("Well, I am too lazy to make any apps/games either way");
    console.log("Warned user");
    return;
    } else if (promptUser == "yes") {
    alert("Then why tf did you click it??");
    console.log("Warned user");
    return;
    } else {
    alert("Well, you aint getting there anyway, because it does not exist :D");
    console.log("Warned user: " + promptUser);
    return;
    }
}

// Keyboard input handler
window.addEventListener("keydown", (event) => {
    const key = event.key;

    // Handle Ctrl+C for copying display content
    if (event.ctrlKey && key === 'c') {
        if (display && display.value) {
            navigator.clipboard.writeText(display.value).then(() => {
                console.log("Copied to clipboard: " + display.value);
            });
        }
        return; // Exit to prevent further key handling
    }

    // Handle numeric and operator keys, parentheses, and exponents
    if (/[\d+\-*/().^]/.test(key)) {
        appendToDisplay(key);
    } 
    // Handle Enter key to calculate the result
    else if (key === 'Enter') {
        calculate();
    } 
    // Handle Backspace key to delete the last character
    else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    }
    else if (key === 'c') {
        event.preventDefault();
        clearDisplay();
    }
});


setTimeout(function () {
    alert("Please give me a A! :)");
}, 1000);

// Toggle between dark and light mode
function toggleTheme() {
  const body = document.body;
  const themeToggleBtn = document.getElementById("theme-toggle");

  body.classList.toggle("light-theme");
  body.classList.toggle("dark-theme");

  themeToggleBtn.textContent = body.classList.contains("light-theme")
    ? "Switch to Dark Mode"
    : "Switch to Light Mode";
}

function toggleHelpPopup() {
  const helpPopup = document.getElementById("help-popup");
  helpPopup.classList.toggle("hidden");
}
