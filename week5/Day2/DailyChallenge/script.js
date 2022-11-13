// In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// Create an array which value is the planets of the solar system.
const planets = ["Mars", "Neptune", "Venus", "Earth", "Saturn", "Uranus", "Jupiter", "Pluto"]

// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
for (const planet of planets) {
    const div = document.createElement("div")
    div.classList.add("planet")
    div.classList.add(planet.toLowerCase())
    
    // Finally append each div to the <section> in the HTML (presented below).
    const section = document.querySelector(".listPlanets")
    section.appendChild(div)
} 
