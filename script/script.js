function appendToDisplay(value) {
    document.getElementById('display').value += value;
}


function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
    } catch (error) {
    document.getElementById('display').value = 'Error';
    }
}

function calculatePercentage() {
    try {
    const expression = document.getElementById('display').value;
    const result = eval(expression + '/100');
    document.getElementById('display').value = result;
    } catch (error) {
    document.getElementById('display').value = 'Error';
    }
}


function calculateSquareRoot() {
    try {
    const expression = document.getElementById('display').value;
    const result = Math.sqrt(eval(expression));
    document.getElementById('display').value = result;
    } catch (error) {
    document.getElementById('display').value = 'Error';
    }
}














