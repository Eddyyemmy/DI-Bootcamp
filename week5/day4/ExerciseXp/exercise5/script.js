
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

// Add many events listeners to one element on your webpage. Use the click, mouseover, mouseout and dblclick events.
// Each listener should do a different thing, for instance - change position x, change position y, change color, change the font size… and more.

window.addEventListener("blur", () => {
    const body = document.querySelector("body");
    body.style.backgroundColor = "blue";
});

window.addEventListener("focus", () => {
    const body = document.querySelector("body");
    body.style.backgroundColor = "azure";
});

const submit = document.getElementById("submit");
submit.addEventListener("mouseover", () => {

    submit.style.backgroundColor = "red";
});

submit.addEventListener("mouseout", () => {
    submit.style.backgroundColor="grey";
});

form.addEventListener("pointerleave", () => console.log("pointer left form"));
form.addEventListener("pointerenter", () => console.log("pointer inside form"));
radius.addEventListener("keyup", (e) => console.log(e.keyCode));
window.addEventListener("resize", ()  => alert("you resized the window"));