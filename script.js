function convertTemperature() {
    let inputValue = parseFloat(document.getElementById('inputValue').value);
    let inputUnit = document.getElementById('inputUnit').value;
    let outputUnit = document.getElementById('outputUnit').value;
    let outputValue;

    if (isNaN(inputValue)) {
        alert('Please enter a valid number');
        return;
    }

    if (inputUnit === 'celsius') {
        if (outputUnit === 'fahrenheit') {
            outputValue = (inputValue * 9/5) + 32;
        } else if (outputUnit === 'kelvin') {
            outputValue = inputValue + 273.15;
        } else {
            outputValue = inputValue;
        }
    } else if (inputUnit === 'fahrenheit') {
        if (outputUnit === 'celsius') {
            outputValue = (inputValue - 32) * 5/9;
        } else if (outputUnit === 'kelvin') {
            outputValue = (inputValue - 32) * 5/9 + 273.15;
        } else {
            outputValue = inputValue;
        }
    } else if (inputUnit === 'kelvin') {
        if (outputUnit === 'celsius') {
            outputValue = inputValue - 273.15;
        } else if (outputUnit === 'fahrenheit') {
            outputValue = (inputValue - 273.15) * 9/5 + 32;
        } else {
            outputValue = inputValue;
        }
    }

    document.getElementById('outputValue').textContent = `Converted value: ${outputValue.toFixed(2)}`;
}
