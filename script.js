function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
document.addEventListener('keydown', function(event) {
    const key = event.key; // Key pressed by user

    // If number key (0-9) is pressed
    if (!isNaN(key)) {
        appendValue(key);
    }

    // If operator key is pressed
    if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendValue(key);
    }

    // If Enter key is pressed, calculate result
    if (key === 'Enter') {
        calculate();
    }

    // If Backspace is pressed, clear the display
    if (key === 'Backspace') {
        clearDisplay();
    }
});