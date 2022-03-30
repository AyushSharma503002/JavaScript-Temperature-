let kelvin = document.getElementById("kev");
let fahrenheit = document.getElementById("far");
let celsius = document.getElementById("cel")

kelvin.oninput = () => {
    let output = ((parseFloat(kev.value) - 273) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(output);
}

fahrenheit.oninput = () => {
    let output = ((parseFloat(far.value) - 32) * 5 / 9) + 273;
    kelvin.value = parseFloat(output);
}