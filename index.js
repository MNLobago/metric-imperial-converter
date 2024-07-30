/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

function convert() {
    const value = parseFloat(document.getElementById('inputValue').value);
    
    if (isNaN(value)) {
        alert('Please enter a valid number');
        return;
    }
    
    // Length conversion
    const metersToFeet = value * 3.281;
    const feetToMeters = value / 3.281;
    const lengthResult = `${value} meters = ${metersToFeet.toFixed(3)} feet | ${value} feet = ${feetToMeters.toFixed(3)} meters`;
    document.getElementById('lengthResult').innerText = lengthResult;

    // Volume conversion
    const litersToGallons = value * 0.264;
    const gallonsToLiters = value / 0.264;
    const volumeResult = `${value} liters = ${litersToGallons.toFixed(3)} gallons | ${value} gallons = ${gallonsToLiters.toFixed(3)} liters`;
    document.getElementById('volumeResult').innerText = volumeResult;

    // Mass conversion
    const kilogramsToPounds = value * 2.204;
    const poundsToKilograms = value / 2.204;
    const massResult = `${value} kilograms = ${kilogramsToPounds.toFixed(3)} pounds | ${value} pounds = ${poundsToKilograms.toFixed(3)} kilograms`;
    document.getElementById('massResult').innerText = massResult;
}
