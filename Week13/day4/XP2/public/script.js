function fetchUser() {
    fetch('http://localhost:3001/fetchuser')
    .then(res=> res.json())
    .then(data =>{
        document.getElementById('root').innerHTML = `${data.firstname} ${data.lastname}`
        console.log(data);
    })
    .catch(e =>{
      console.log(e)
    })
}

fetchUser()

const button = document.getElementById('button')
button.addEventListener("click", clickMe)

function clickMe() {
    alert('Hello from JavaScript')
}

clickMe()
