function convertToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * (5 / 9)).toFixed(2);
}

document.getElementById("button1").onclick = function () {
    let fahrenheit = parseFloat(document.getElementById("myInput").value);
    if (!isNaN(fahrenheit)) {
        let celsius = convertToCelsius(fahrenheit);
        document.getElementById("result").textContent = `Result (°C): ${celsius}`;
    } else {
        document.getElementById("result").textContent = 'Please enter a valid number';
    }
};
