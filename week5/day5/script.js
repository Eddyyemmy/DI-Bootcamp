generateColors()

function generateColors() {
    const colorDivs = document.querySelectorAll(".color")
   for (const colorDiv of colorDivs) {
    const randomColor = generateRandomColor()
    colorDiv.style.backgroundColor = randomColor
   }
}

// Color generator function
function generateRandomColor() {
    const hex = Math.floor(Math.random() * 16777215).toString(16)
    return "#" + hex 
}