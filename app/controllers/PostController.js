const db = require("../models");
const Post = db.posts;
const Op = db.Sequelize.Op;

// create
exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "content cannot be empty",
    });
    return;
  }
  const post = {
    title: req.body.title,
    description: req.body.description,
    publisehed: req.body.publisehed ? req.body.published : false,
  };

  Post.create(post)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        messages: err.message || "some error occured while creating post",
      });
    });
};

// Retrieve All
exports.findAll = (req, res) => {
  const title = req.query.title;
  let condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Post.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some error has occured while retrieving data",
      });
    });
};

//  Find
exports.findOne = (req, res) => {
  const id = req.params.id;
  Post.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        messages: err.messages || "failed to get data with id : " + id,
      });
    });
};

//Update
exports.update = (req, res) => {
  const id = req.params.id;
  Post.update(req.body, {
    where: { id: id },
  })
    .then((result) => {
      if (result == 1) {
        res.send({ message: "post was updated successfully" });
      } else {
        res.send({ message: "cannot update post with id " + id });
      }
    })
    .catch((err) => {
      res.status(500).send({
        messages: err.messages || "failed to update data with id " + id,
      });
    });
};

// delete
exports.destroy = (req, res) => {
  const id = req.params.id;
  Post.destroy({ where: { id: id } })
    .then((result) => {
      if (result == 1) {
        res.send({ message: "post has been deleted" });
      } else {
        res.send({ message: "failed to delete post" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "cannot delete post with id " + id });
    });
};

// delete all
exports.deleteAll = (req, res) => {};

// find all published
exports.findAllPublished = (req, res) => {};
