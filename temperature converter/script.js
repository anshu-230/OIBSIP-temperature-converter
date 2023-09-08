document.addEventListener('DOMContentLoaded', function () {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const kelvinInput = document.getElementById('kelvin');
    const convertButton = document.getElementById('convert');

    convertButton.addEventListener('click', function () {
        const celsiusValue = parseFloat(celsiusInput.value);
        const fahrenheitValue = parseFloat(fahrenheitInput.value);
        const kelvinValue = parseFloat(kelvinInput.value);

        if (!isNaN(celsiusValue)) {
            // Celsius to Fahrenheit and Kelvin
            const convertedFahrenheit = (celsiusValue * 9/5) + 32;
            const convertedKelvin = celsiusValue + 273.15;
            
            fahrenheitInput.value = convertedFahrenheit.toFixed(2);
            kelvinInput.value = convertedKelvin.toFixed(2);
        } else if (!isNaN(fahrenheitValue)) {
            // Fahrenheit to Celsius and Kelvin
            const convertedCelsius = (fahrenheitValue - 32) * 5/9;
            const convertedKelvin = (fahrenheitValue + 459.67) * 5/9;
            
            celsiusInput.value = convertedCelsius.toFixed(2);
            kelvinInput.value = convertedKelvin.toFixed(2);
        } else if (!isNaN(kelvinValue)) {
            // Kelvin to Celsius and Fahrenheit
            const convertedCelsius = kelvinValue - 273.15;
            const convertedFahrenheit = (kelvinValue * 9/5) - 459.67;
            
            celsiusInput.value = convertedCelsius.toFixed(2);
            fahrenheitInput.value = convertedFahrenheit.toFixed(2);
        }
    });
});

