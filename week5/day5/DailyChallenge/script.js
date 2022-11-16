// In the js file, you must add the following functionalities:
// Create an empty array : const tasks = [];
const tasks = [];

// Create a function called addTask(). As soon as the user clicks on the button:

const form = document.getElementById("form");
form.addEventListener("submit", addTask);

function addTask(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const task = formData.get("task");
    if (task === "") return
    tasks.push(task);
    form.reset();
    console.log("form submitted", tasks);

}
// check that the input is not empty,
// then add it to the array (ie. add the text of the task)
// then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
// Each new task added should have (starting from left to right - check out the image at the top of the page)
// a “X” button. Use font awesome for the “X” button.
// an input type="checkbox". The label of the input is the task added by the user.