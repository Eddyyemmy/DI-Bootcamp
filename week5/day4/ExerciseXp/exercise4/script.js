// Exercice 4 : Volume Of A Sphere
// Instructions
// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:

const form = document.getElementById("my-form");
const radius = document.getElementById("radius");
const volume = document.getElementById("volume")
form.addEventListener("submit", handleSubmit);

const NUMBER_OF_DECIMALS = 2;

function handleSubmit(e) {
    e.preventDefault();
    const r = Number(radius.value);
    if (Number.isNaN(r)) return;
    const v = (4/3) * Math.PI * r ** 3;
    volume.value = v.toFixed(NUMBER_OF_DECIMALS);
}