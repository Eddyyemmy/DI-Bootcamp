// Use this Giphy API documentation. Use the API KEY provided in Exercises XP.
// In the HTML file, add a form, containing an input and a button. 
//     This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user 
//  (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, 
//         look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.


let form = document.querySelector("form");
let input = document.getElementById("search");
let container = document.getElementById("container")
let clear = document.getElementById("clear-container")

form.addEventListener("submit", listeningSubmit)
clear.addEventListener("click", clearContainer)

function clearContainer() {
    container.innerText = "";
}

function listeningSubmit(e){
    e.preventDefault();
    let searchGif = input.value;
    input.value= "";
    getGif(searchGif);
}

function getGif(word) {
    let url = `https://api.giphy.com/v1/gifs/search?q=${word}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", logRequest);
    xhr.open("GET", url);
    xhr.send();
}

function logRequest(e){
    let log = JSON.parse(e.target.response);
    let firstResult = log.data[0];
    let imageUrl = firstResult.images.fixed_width.webp;
    let altText = imageUrl.title;
    createImage(imageUrl, altText);
}

function createImage(url, alt){
    let img = document.createElement("img")
    let div = document.createElement("div")
    let button = document.createElement("button");
    
    img.src = url;
    img.alt = alt
    
    button.textContent = "Delete";
    button.addEventListener("click", deleteGif);

    div.append(img)
    div.append(button)
    container.append(div)
}

function deleteGif(e){
    let gifRemove = e.target.parentElement;
    gifRemove.remove();
}

