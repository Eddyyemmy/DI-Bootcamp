
// Using a DOM property, retrieve the h1 and console.log it.

// Using DOM methods, remove the last paragraph in the <article> tag.

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)


const h1 = getFirstElement("h1")
const h2 = getFirstElement("h2")
const h3 = getFirstElement("h3")
const secondParagraph = getSecondParagraph()

removeLastLine()
addButton()



h2?.addEventListener("click", changeBackground)
h3?.addEventListener("click", hideH3)
h1?.addEventListener("mouseover", randomizeH1size)
secondParagraph.addEventListener("mouseover", makeSecondParagraphFadeout)



function makeSecondParagraphFadeout() {
    secondParagraph.classList.add("fadeout")
}

function getSecondParagraph() {
    return document.querySelectorAll("p")[1]
}

function getRandomNumber() {
    return Math.floor(Math.random() * 100 + 1)
}

function randomizeH1size() {
    const randomNumber = getRandomNumber()
    h1.style.fontSize = randomNumber + "px"
}

function makeParagraphsBold() {
    const paragraphs = document.querySelectorAll("p")
    for (const paragraph of paragraphs) {
        paragraph.classList.add("bold")
    }
}

function addButton() {
    const button = document.createElement("button")
    button.textContent = "Make everything bold"
    button.addEventListener("click", makeParagraphsBold)
    const article = getFirstElement("article")
    article.appendChild(button)
}

function hideH3() {
    h3.classList.add("hide")
}

function changeBackground(){
    h2?.classList.add("red")
}

function removeLastLine() {
    const article = document.querySelector("article")
    article?.lastElementChild.remove()
}

function getFirstElement(selector) {
    return document.querySelector(selector)
}

