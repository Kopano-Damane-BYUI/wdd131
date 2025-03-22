// Function to display current year and last modified date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Function to calculate wind chill based on the temperature and wind speed
function calculateWindChill(temperature, windSpeed, isCelsius = true) {
    // Check for valid conditions for wind chill calculation
    if (isCelsius) {
        if (temperature <= 10 && windSpeed > 4.8) {
            // Celsius wind chill formula
            return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
        }
    } else {
        if (temperature <= 50 && windSpeed > 3) {
            // Fahrenheit wind chill formula
            return (35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
        }
    }
    // Return "N/A" if conditions are not met
    return "N/A";
}

// Example values for Honolulu (Temperature: 26°C, Wind Speed: 15 km/h)
const temperature = 8; // in Celsius
const windSpeed = 15; // in km/h

// Get the wind chill and display it in the weather section
const windChill = calculateWindChill(temperature, windSpeed, true); // true means Celsius
document.querySelector(".weather .windChill").textContent = `Wind Chill: ${windChill}°C`; // Update the wind chill in the DOM
