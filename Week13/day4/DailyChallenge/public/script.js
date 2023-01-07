const searchProduct = () => {
    const input = document.getElementById('imput').value;
    fetch(`http://localhost:3000/api/aboutMe/${input}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            showProducts(data);
      })
    .catch(e =>{
        console.log(e);
    })
}

const showProducts = (arr) => {
    const html = arr.map(item=>{
        return `<div>${item.name} ${item.name}</div>`;
    })
    document.getElementById('root').innerHTML = html.join('')
}

const getProducts = async() => {
    try{
        const ret = await fetch('http://localhost:3001/api/products');
        const data = await ret.json();
        console.log(data);
        showProducts(data)
    }
    catch(e){
        console.log(e);
    }
}

searchProduct()
getProducts()