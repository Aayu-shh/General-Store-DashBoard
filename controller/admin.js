const db = require('../util/database');

const insertQuery = "INSERT INTO items(name,description,price,quantity) VALUES(?,?,?,?)";
const readQuery = "SELECT * FROM items";
exports.addItem = (req, res, next) => {
    let name = req.body.name;
    let description = req.body.description;
    let price = req.body.price;
    let quantity = req.body.quantity;
    console.log(name + " : " + description + " : " + price + " : " + quantity);

    db.execute(insertQuery, [name, description, price, quantity])
        .then(resp => {
            console.log(resp[0]);
            res.send("<h1>Successs</h1>");
        })
        .catch(err => console.log(err));
};

exports.getItems = (req, res, next) => {
    db.execute(readQuery)
    .then(resp => {
        res.send(resp[0]);          //List of response objects  (with IDs)
    })
    .catch(err=> console.log(err));
}

exports.editItem = (req,res,next)=>{
    const id = req.params.id;
    db.execute('UPDATE items SET quantity = ? WHERE id = ?',id)
    .then(resp=> res.send(resp))
    .catch(err => console.log(err));
}