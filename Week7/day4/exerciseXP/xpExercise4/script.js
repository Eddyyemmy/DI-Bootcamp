// 🌟 Exercise 4 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

(function (name, img){
    const div = document.createElement("div")
    div.innerHTML = name;

    const image = document.createElement("img")
    image.src = "https://picsum.photos/60";

    const nav = document.querySelector(".navbar");
    nav.append(div);
    nav.append(image);
})("ben");