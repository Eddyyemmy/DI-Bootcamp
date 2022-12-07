// Exercise 1 : Giphy API
// Instructions
// With your knewly accumulated knowledge of AJAX lets write some cool code!

// You will work with this part of the documention

// You will use this Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Explanation of the Gif URL and the queries

// q Request Parameter: Search query term or phrase. Above, the URL is searching for “hilarious” gifs

// rating Request Parameter: Filters results by specified rating. We are searching for Level 1 gifs. Check out the ratings documentation

// api_key Request Paramater : GIPHY API Key. Our API KEY is hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My


// Create a program to retrieve the data from the API URL provided above. Use XMLHttpRequest object to 
// make an AJAX request to the Giphy API and console.log the Javascript Object.
// let URL = "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2";


let BASED_URL = "https://api.giphy.com/v1/gifs/search";
let searchWord = "sun";
let rating = "g";
let api_key = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
let limit = 10;
let offset = 2;

let URL = `${BASED_URL}?q=${searchItem}&rating=${rating}&
api_key=${api_key}&limit=${limit}&offset=${offset}`;


let xhr = new XMLHttpRequest()
xhr.addEventListener('load', getData)
xhr.open('GET', URL)
xhr.send()

function getData(e){
    let dataResponse = JSON.parse(xhr.response)
    console.log(dataResponse);
}



// 🌟 Exercise 2 : Giphy API
// Instructions
// Using this part of the documention, retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Console.log the Javascript Object
