const form = document.querySelector('form')
form.addEventListener('submit', submitList);

function submitList(e){
  e.preventDefault();
  const formData = new FormData(form);
  const cart = {};
  for (const entry of formData) {
    const [key, value] = entry;
    cart[key] = value;
  }
  sendListToServer(cart);
  getList()
}

function sendListToServer(cart) {
  fetch('http://localhost:3000/items',{
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(cart)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  })
}


function getList() {
  fetch('http://localhost:3000/items')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    displayShoppingList(data);
  })
}

function displayShoppingList(data) {
  let root = document.getElementById('root');
  root.innerHTML = "";
  data.forEach(item =>{
    let li = document.createElement('li');
    li.innerText= `${item.item}: ${item.amount}`;
    root.append(li)
  })
}
