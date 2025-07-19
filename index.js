// Get input value
//     Hit Convert w event listener
//     Run length conversion function
//     conv meters & vice versa
//     Store the variable
//     Clear the input field
//     change input value to variable
// Run a main function that has 3 within
//     length conversion function
//         save result to storage

//     variable for input value, variable for foot conv, var for meter conv
    

//     mass conversion function
//     volume conversion function 

const inputEl = document.querySelector("#input-el");
const convertBtn = document.querySelector("#convert-btn");
let lengthConversionEl = document.querySelector("#length-conversion");
let volumeConversionEl = document.querySelector("#volume-conversion");
let massConversionEl = document.querySelector("#mass-conversion");
let meterToFeet = 0
let inMeter = 0

convertBtn.addEventListener("click", function() {
    lengthConverter()
    volumeConverter()
    massConverter()
})

inputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault()
        convertBtn.click()
    }
})

function lengthConverter(){
    meterToFeet = inputEl.value * 3.281
    feetToMeter = inputEl.value / 3.281
    lengthConversionEl.innerHTML = `${inputEl.value} meters = ${meterToFeet.toFixed(2)} feet | ${inputEl.value} feet = ${feetToMeter.toFixed(2)} meters`
    console.log("Btn clicked")
    console.log(lengthConversionEl.innerHTML)
    }

    function volumeConverter(){
    literToGal = inputEl.value / 3.785
    galToLiter = inputEl.value * 3.281
    volumeConversionEl.innerHTML = `${inputEl.value} meters = ${literToGal.toFixed(2)} feet | ${inputEl.value} feet = ${galToLiter.toFixed(2)} meters`
    console.log("Btn clicked")
    console.log(volumeConversionEl.innerHTML)
    }

    function massConverter(){
    kiloToPound = inputEl.value * 2.205
    poundToKilo = inputEl.value / 2.205
    massConversionEl.innerHTML = `${inputEl.value} meters = ${kiloToPound.toFixed(2)} feet | ${inputEl.value} feet = ${poundToKilo.toFixed(2)} meters`
    console.log("Btn clicked")
    console.log(massConversionEl.innerHTML)
    }
