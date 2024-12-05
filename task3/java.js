document.getElementById("convert-button").addEventListener("click", function () {
    const tempInput = document.getElementById("temperature-input").value;
    const unit = document.getElementById("unit-select").value;
    const resultDisplay = document.getElementById("result-display");

    // Validate input
    const temp = parseFloat(tempInput);
    if (isNaN(temp)) {
        resultDisplay.textContent = "Please enter a valid number.";
        return;
    }

    // Perform conversion
    let result = "";
    if (unit === "Celsius") {
        result += `${temp} °C = ${(temp * 9/5 + 32).toFixed(2)} °F | ${(temp + 273.15).toFixed(2)} K`;
    } else if (unit === "Fahrenheit") {
        result += `${temp} °F = ${((temp - 32) * 5/9).toFixed(2)} °C | ${(((temp - 32) * 5/9) + 273.15).toFixed(2)} K`;
    } else if (unit === "Kelvin") {
        result += `${temp} K = ${(temp - 273.15).toFixed(2)} °C | ${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F`;
    }

    resultDisplay.textContent = result;
});
