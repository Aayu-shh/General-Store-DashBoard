myForm = document.querySelector('form');
named = document.getElementById('name');
description = document.getElementById('desc');
price = document.getElementById('price')
quantity = document.getElementById('quant');
itemList = document.querySelector('.items');


myForm.onsubmit = async (e)=>{
    e.preventDefault();
    const itemObj = { 
        name : e.target.name.value,
        description : description.value,
        price: price.value,
        quantity: quantity.value
    }
    let buyOne = document.createElement('button');
    buyOne.innerText = "BUY ONE";
    let buyTwo = document.createElement('button');
    buyTwo.innerText = "BUY TWO";
    let buyThree = document.createElement('button');
    buyThree.innerText = "BUY THREE";
    let item = document.createElement('li');

    item.append(document.createTextNode(named.value + " : " + description.value + " : " + price.value + " : " + quantity.value))
    item.append(buyOne);
    item.append(buyTwo);
    item.append(buyThree);
    itemList.append(item);
    
    console.log("Deets: " + named.value + " " + description.value + " " + price.value + " " + quantity.value);

    named.value="";
    description.value ="";
    price.value ="";
    quantity.value="";
}