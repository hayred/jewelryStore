const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
name: {type: String, required: true}, 
description: { type: String, required: true},
 price: {type: Number, required: true},
 quantity: {type: Number, required: false}
// id: {type: Number, required: false}

});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;