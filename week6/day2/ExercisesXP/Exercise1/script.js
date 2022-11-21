// In your Javascript file, using setTimeout, call a function after 2 seconds.
setTimeout(alertHello, 2000)
setTimeout(addParagraph, 5000)
const button = document.getElementById("clear")
button.addEventListener("click", clearParagraphInterval)

// In your Javascript file, using setInterval, call a function every 2 seconds.
const interval = setInterval(addParagraph, 2000)

// The function will alert “Hello World”.
function alertHello() {
    alert ("Hello World!!!")
}

// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
function addParagraph() {
    const p = document.createElement("p");
    p.textContent = "Hello World!!"
    container = document.getElementById("container")
    // Instead of clicking on the button, the interval will be cleared (ie. clearInterval) 
    // as soon as there will be 5 paragraphs inside the <div id="container">.
    container.children.length < 5 ? container.appendChild(p) : clearParagraphInterval()
}

// The interval will be cleared (ie. clearInterval), when the user will click on the button.
function clearParagraphInterval() {
    clearInterval(interval)
}
