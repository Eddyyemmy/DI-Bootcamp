document.querySelector("form").addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault()
    let newForm = new FormData(document.querySelector("form"));
    let entries = newForm.entries();
    let entry = Object.fromEntries(entries);
    // for (let entry of entries) {
    //     console.log(entry);
    // }

    let entryString = JSON.stringify(entry);
    console.log(entryString);
    let p = document.createElement("p")
    p.innerText = entryString;
    let section = document.getElementById("section")
    section.appendChild(p)

}
