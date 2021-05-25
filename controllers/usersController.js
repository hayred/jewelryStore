const db = require("../models");
module.exports = {
  findAll: function (req, res) {
    db.Users.find()
      .then((dbUsers) => res.json(dbUsers))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Users.findById(req.params.id)
      .then((dbUsers) => res.json(dbUsers))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Users.create(req.body)
      .then((dbUsers) => res.json(dbUsers))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Users.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbUsers) => res.json(dbUsers))
      .catch((err) => res.status(422).json(err));
  },
};
