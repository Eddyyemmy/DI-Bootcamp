function sendData() {
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    }

    console.log(user);
    fetch('http://localhost:3001/',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },   
        body: JSON.stringify(user)
    })
    .then(res=> res.json())
    .then(data =>{
        document.getElementById('root').innerHTML = `${data.firstname} ${data.lastname}`
    })
    .catch(e => console.log(e))
}

sendData()

const button = document.getElementById('button')
button.addEventListener("click", clickMe)

function clickMe() {
    alert('Hello from JavaScript')
}

clickMe()