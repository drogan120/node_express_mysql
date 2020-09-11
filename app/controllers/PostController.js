const db = require("../models");
const Post = db.posts;
const Op = db.Sequelize.Op;

// create
exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ message: "content cannot be empty" });
    return;
  }
  const post = {
    title: req.body.title,
    description: req.body.description,
    publisehed: req.body.publisehed ? req.body.published : false,
  };

  Post.create(post)
    .then((result) => {
      res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({
          messages: err.message || "some erroe occured while creating post",
        });
    });
};

// Retrieve All
exports.All = (req, res) => {};

//  Find
exports.find = (req, res) => {};

//Update
exports.update = (req, res) => {};

// delete
exports.destroy = (req, res) => {};

// delete all
exports.deleteAll = (req, res) => {};

// find all published
exports.findAllPublished = (req, res) => {};
