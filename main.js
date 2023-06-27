//Inputs 
const name = document.querySelector('#name');
const desc = document.querySelector('#desc');
const price = document.querySelector('#price');
const quantity = document.querySelector('#quant');
//ul
const itemList = document.querySelector(".items")



//-------OnSubmit 
document.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {

        let itemObj = {
            name: name.value,
            description: desc.value,
            price: price.value,
            quantity: quantity.value
        };

        //Saving New item Details     
        await axios.post(("http://localhost:8080/addItem"), itemObj);
        let responseObj = axios.get("http://localhost:8080/items");
        let id = responseObj.data[responseObj.data.length-1].id;

        //console.log(responseObj);
        displayOnWindow(itemObj, id);
    }
    catch (err) {
        console.log(err);
    }
});


//------On Refresh
document.addEventListener("DOMContentLoaded", async (e) => {
    e.preventDefault();
    try {
        let responseObj = await axios.get("http://localhost:8080/items")
        console.log(responseObj.data);
        displayOnLoad(responseObj.data);
    }
    catch (err) {
        console.log(err);
    }
});

function displayOnLoad(resp) {
    resp.forEach((itemObj) => {
        displayOnWindow(itemObj, itemObj.id);
    })
}

function displayOnWindow(itemObj, id) {

    let item = document.createElement("li");
    item.append(
        document.createTextNode(
            `${itemObj.name}   -   ${itemObj.description}    -   ${itemObj.price}Rs  = >     `));

    let quantityNode = document.createTextNode(itemObj.quantity)
    item.appendChild(quantityNode);

    buyOneBtn = document.createElement("button");
    buyTwoBtn = document.createElement("button");
    buyThreeBtn = document.createElement("button");

    buyOneBtn.innerText = "Buy One"
    buyTwoBtn.innerText = "Buy Two"
    buyThreeBtn.innerText = "Buy Three"
    item.append(buyOneBtn, buyTwoBtn, buyThreeBtn);
    itemList.appendChild(item);

    let localitemObj = {
        price: itemObj.price,
        quantity: itemObj.quantity,
        name: itemObj.name,
        description: itemObj.desccription
    }

    buyOneBtn.onclick = async () => {
        if (localitemObj.quantity > 0) {

            localitemObj.quantity--;
            console.log("One item reduced for", localitemObj.name);
            buyItem();
        }
        else {
            item.append("          --- item Finished")
        }
    }
    buyTwoBtn.onclick = async () => {
        if (localitemObj.quantity > 1) {

            localitemObj.quantity = localitemObj.quantity - 2;
            console.log("Two item reduced for", localitemObj.name);
            buyItem();
        }
        else {
            item.append("          --- Not Enough item for the Order")
        }

    }
    buyThreeBtn.onclick = async () => {
        if (localitemObj.quantity > 2) {

            localitemObj.quantity = localitemObj.quantity - 3;
            console.log("Three item reduced for", localitemObj.name);
            buyItem();
        }
        else {
            item.append("          --- Not Enough item for the Order")
        }

    }

    async function buyItem() {
        let resp = await axios.post(`http://localhost:8080/editItem/${id}`, localitemObj);
        item.removeChild(quantityNode);
        quantityNode = document.createTextNode(`${localitemObj.quantity}`);
        item.insertBefore(quantityNode, item.children[0]);
    }
}

