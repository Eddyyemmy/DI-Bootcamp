const form = document.querySelector("form");
form.addEventListener("submit", submitData)

 function submitData(e){
   e.preventDefault();
   const formData = new FormData(form)
   const cart = {};
   for (const entry of formData) {
     const key = entry[0];
     const value = entry[1];
     cart[key] = value;
   }
   sendCartToServer(cart);
   getShoppingItems()
 }

 function sendCartToServer(cart) {
   fetch('http://localhost:3000/items',{
    method: 'POST',
    body: JSON.stringify(cart),
    headers: {
      'Content-Type':'application/json'
    },
    })
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  })
 }

 function displayShoppingItems(data) {
   let ul = document.getElementById('root');
   ul.innerHTML = "";
   data.forEach(item =>{
   let li = document.createElement('li');
   li.innerText= `${item.item}: ${item.amount}`;
   ul.append(li)
})
}

 function getShoppingItems() {
   fetch('http://localhost:3000/items')
  .then(res => res.json())
  .then(data => {
    console.log(data);
      displayShoppingItems(data);
  })
}
