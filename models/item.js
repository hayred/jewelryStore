const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
name: {type: String, required: true}, 
desciption: { type: String, required: true},
 price: {type: Number, required: true},
 quantity: {type: Number, required: true},
 id: {type: Number, required: true}

});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;