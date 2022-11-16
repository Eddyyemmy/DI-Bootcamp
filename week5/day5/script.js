generateColors()
let currentColor
listenToMain()
let isMousePressed = false

const button = document.querySelector(".clear button")
listenToClearButton()

function listenToClearButton() {
    button.addEventListener("click", clearCanvas)
}

function clearCanvas() {
    currentColor = null
    const squares = document.querySelectorAll("#main > div")
    for (const square of squares) {
        square.style.backgroundColor = "white"
    }
    button.style.backgroundColor = "color"
}

function listenToMain() {
    const main =document.getElementById("main")
    main.addEventListener("mousedown", handleClick)
    main.addEventListener("mousemove", handleMove)
    document.body.addEventListener("mouseup", handleMouseRelease)
}

function handleMouseRelease() {
    isMousePressed = false
}

function handleClick() {
    if (currentColor == null) return
    isMousePressed = true
}

function handleMove (e) {
    if (!isMousePressed) return
    const hoverdDiv = document.elementFromPoint(e.x, e.y)
    hoverdDiv.style.backgroundColor = currentColor
}

function generateColors() {
    const colorDivs = document.querySelectorAll(".color")
    for (const colorDiv of colorDivs) {
        const randomColor = generateRandomColor()
        colorDiv.style.backgroundColor = randomColor
        colorDiv.dataset.color = randomColor
        colorDiv.addEventListener("click", setCurrentColor)
   }
}



// randomColor generator function
function generateRandomColor() {
    const hex = Math.floor(Math.random() * 16777215).toString(16)
    return "#" + hex 
}
 
function setCurrentColor(e) {
    currentColor = e.target.dataset.color
}