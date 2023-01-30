/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const InputEl = document.getElementById("input-value")
const convertBtn = document.getElementById("convert-btn")
const setLen = document.getElementById("set-length")
const setmass = document.getElementById("set-mass")
const setvol = document.getElementById("set-volume")
convertBtn.addEventListener("click", function () {
    const inputValue = parseFloat(InputEl.value);
    if (inputValue) {
        setLength(inputValue)
        setVolume(inputValue)
        setMass(inputValue)
    }else{
        alert("Enter some value to convert")
    }
})

function setLength(number) {
    let feetValue = (number * 3.281).toFixed(3)
    let meterValue = (number * 0.3048).toFixed(3)
    let str = `${number} meters = ${feetValue} foot | ${number} foot  = ${meterValue} meters`

    setLen.innerHTML = str

}
function setVolume(number) {
    let gallonValue = (number * 0.264).toFixed(3)
    let literValue = (number * 3.785).toFixed(3)
    let str = `${number} liters = ${gallonValue} gallons | ${number} gallons  = ${literValue} liters`

    setvol.innerHTML = str

}
function setMass(number) {
    let poundValue = (number * 2.204).toFixed(3)
    let kiloValue = (number * 0.45392).toFixed(3)
    let str =
        `
    ${number} kilograms = ${poundValue} pounds | ${number} pounds  = ${kiloValue} kilograms`

    setmass.innerHTML = str

}