// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

// In this exercise you work with the HTML code presented below.

// Follow these steps :

// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
const button = getButton()
const shuffleButton = document.getElementById("shuffle")

button?.addEventListener("click", handleClick)
shuffleButton.addEventListener("click", shuffleStories)

// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.
function getFormValues() {
    const noun = document.getElementById("noun").value
    const adjective = document.getElementById("adjective").value
    const person = document.getElementById("person").value
    const verb = document.getElementById("verb").value
    const place = document.getElementById("place").value
    return {
        noun:noun,
        adjective: adjective,
        person: person,
        verb: verb,
        place: place,
    }
}

function handleClick(e) {
    e.preventDefault()
    const formValues = getFormValues()
    const noun = formValues.noun
    const adjective = formValues.adjective
    const person = formValues.person
    const verb = formValues.verb
    const place = formValues.place
    
    // Make sure the values are not empty
    if (noun == "" || adjective == "" || person == "" || verb == "" || place == "") return
    
    // Write a story that uses each of the values.
    const story = writeStory(noun, adjective,person, verb, place)
    console.log('story', story)

    appendStoryToPage(story)
}

function shuffleStories() {
    const formValues = getFormValues()
    const noun = formValues.noun
    const adjective = formValues.adjective
    const person = formValues.person
    const verb = formValues.verb
    const place = formValues.place

    let story
    const randomNumber = generateRandomNumber()

    if (randomNumber === 1) {
        story = writeStory(noun, adjective, person, verb, place)
    } else if (randomNumber === 2) {
        story = writeStory2(noun, adjective, person, verb, place)
    } else {
        story = writeStory3(noun, adjective, person, verb, place)
    }
    appendStoryToPage(story)
   
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 3) + 1
}
function appendStoryToPage(story) {
    const paragraph = document.getElementById("story")
    const span = document.createElement("span")
    span.innerText = story
    paragraph.textContent = ""
    paragraph?.appendChild(span)
}

function writeStory(noun, adjective, person, verb, place) {
    return `I like to look at ${noun}s, I think that they are ${adjective}. My favourite person is ${person}. We often ${verb} together when we are in ${place}`
}

function writeStory2(noun, adjective, person, verb, place) {
    return `I like to have a class of ${noun}s, I think that they are ${adjective}. The name of my lecturer is ${person}. We can go for a  ${verb} together when we are in ${place}`
}

function writeStory3(noun, adjective, person, verb, place) {
    return `the name of my dog ${noun}, my dog is ${adjective}. her favourite person is ${person}. We often ${verb} together when we are in ${place}`
}

function getButton() {
    return document.getElementById("lib-button")
}