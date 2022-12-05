function pangram(event) {
    event.perventDefault()
    const myform = document.forms.input;
    console.log(myform);

    const str = myform.split("").join("");
    console.log(str);
    const submit = document.forms.submit

    console.log(submit)
}

pangram()