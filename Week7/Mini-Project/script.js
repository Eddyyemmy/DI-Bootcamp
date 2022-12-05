let quotes = [
    {
        id: "0",
        author: "Nelson Mandela",
        quote: "After climbing a great hill one only finds that there are many more hills to climb.",
    },
    {
        id: "1",
        author: "Bill Gate",
        quote: "If you think your teacher is tough, wait till you get a boss.",
    },
    {
        id: "2",
        author: "Robert Kiyosaki",
        quote: "The single most powerful asset we all have is our mind. If it is trained well, it can create enormous wealth.",
    },
    {
        id: "3",
        author: "Franklin D. Roosevel",
        quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    },
    {
        id: "4",
        author: "Albert Einstain",
        quote: "A person who never made a mistake never tried anthing new.",
    },
    {
        id: "5",
        author: "Albert Einstain",
        quote: "We cannot solve problems with the kind of thinking we employed when we came up with them.",
    },
    {
        id: "6",
        author: "Lucas Potage",
        quote: "The purpose of our lives is to be happy.",
    },
    {
        id: "7",
        author: 'Mahatma Gandhi.',
        quote: "Happy is when what you think, what you say ans what you do are in harmony.",
    },
    {
        id: "8",
        author: "Thomas A. Edison",
        quote: "I have not failed. I've just found 10,000 ways that won't work",
    },
    {
        id: "9",
        author: "Benjamin Franklin",
        quote: "I you fail to plan, you are planning to fail!",
    },
]

function generateQuote() {
    console.log('Generating quote ....');

    let max_index = quotes.length -1;
    console.log(max_index);

    const randomIndex = getRandomIdx(max_index);
    console.log(randomIndex);

    const randomQuote = quotes[randomIndex];
    console.log(randomQuote);

    let generator = document.getElementById("generator");
    let container = document.createElement("div")
    let divAuthor = document.createElement("div");
    let divQuote = document.createElement("div");

    divAuthor.innerText = randomQuote.author;
    divQuote.innerText = randomQuote.quote;
   
    container.appendChild(divQuote);
    container.appendChild(divAuthor);

    generator.appendChild(container);
}

function getRandomIdx(max) {
    return Math.round(Math.random() * max);
}

let button = document.getElementById("bt-quote");

button.onclick = generateQuote;