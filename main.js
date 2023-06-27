myForm = document.querySelector('form');
named = document.getElementById('name');
description = document.getElementById('desc');
price = document.getElementById('price')
quantity = document.getElementById('quant');

myForm.onsubmit = (e)=>{
    e.preventDefault();
    console.log("Deets: " + named.value + " " + description.value + " " + price.value + " " + quantity.value);
    named.value="";
    description.value ="";
    price.value ="";
    quantity.value="";
}