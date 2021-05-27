const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
category: {type: String, required: true},    
name: {type: String, required: true}, 
description: { type: String, required: true},
 price: {type: String, required: true},
 quantity: {type: Number, required: false},
 photo: { type: String, required: false}

// id: {type: Number, required: false}

});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;