setTimeout(alertHello, 2000)
setTimeout(addParagraph, 5000)
const button = document.getElementById("clear")
button.addEventListener("click", clearParagraphInterval)
const interval = setInterval(addParagraph, 2000)

function alertHello() {
    alert ("Hello World!!!")
}

function addParagraph() {
    const p = document.createElement("p");
    p.textContent = "Hello World!!"
    container = document.getElementById("container")
    container.children.length < 5 ? container.appendChild(p) : clearParagraphInterval()
}


function clearParagraphInterval() {
    clearInterval(interval)
}