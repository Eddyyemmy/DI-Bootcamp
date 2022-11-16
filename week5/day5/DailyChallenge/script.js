// In the js file, you must add the following functionalities:
// Create an empty array : const tasks = [];

// Create a function called addTask(). As soon as the user clicks on the button:

const form = document.getElementById("form");
const ul = document.getElementById("list-tacks");

form.addEventListener("submit", addTask);
const tasks = [];

function addTask(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const task = formData.get("task");
    if (task === "") return;
    tasks.push(task);
    renderTasks(tasks);
    form.reset();
}



function renderTasks(tasks) {
    console.log(tasks);
    ul.innerHTML = "";
    
    for (const task of tasks) {
        const li = generateLi(task);
        ul.append(li);
    }
}

function generateLi(task) {
    const li = document.createElement("li");
    const xMark = document.createElement("i");
    xMark.classList.add("fa-solid", "fa-xmark");
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    const span = document.createElement("span");
    span.innerText = task;
    

    li.append(xMark, input, span);
    return li;
}


// check that the input is not empty,
// then add it to the array (ie. add the text of the task)
// then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
// Each new task added should have (starting from left to right - check out the image at the top of the page)
// a “X” button. Use font awesome for the “X” button.
// an input type="checkbox". The label of the input is the task added by the user.