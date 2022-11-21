// In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// Create an array which value is the planets of the solar system.
const planets = [
    { name: "Mars", moons: 0},
    { name: "Neptune", moons: 0},
    { name: "Venus", moons: 1},
    { name: "Earth", moons: 0},
    { name: "Saturn", moons: 2},
    { name: "Uranus", moons: 3},
    { name: "Jupiter", moons: 4},
    { name: "Pluto", moons: 0},
]

//For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
for (const planet of planets) {
    const div = document.createElement("div")
    div.classList.add("planet")
    div.classList.add(planet.name.toLowerCase())

    for (let i = 0; i < planet.moons; i++) {
        const moonDiv = document.createElement("div")
        moonDiv.classList.add("moon")
        moonDiv.style.left = i * 10 +"px"
        div.appendChild(moonDiv)

    }

    
    // Finally append each div to the <section> in the HTML (presented below).
    const section = document.querySelector(".listPlanets")
    section.appendChild(div)
} 
