const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/jewelrystore"
  );
  
  const itemSeed = [

    {
        description: "Gold Chain",
        price: 500,
        name: "Gold Chain",
        quantity: 5,
        
    }
  ];

  db.Item 
    .remove({})
    .them(() => db.Item.collection.insertMany(itemSeed))
    .then(data => {
        console.log(data.result.n + "records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });


    //test