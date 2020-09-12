module.exports = (app) => {
  const posts = require("../controllers/PostController");
  let router = require("express").Router();

  //   create new post
  router.post("/", posts.create);
  // Retrieve all post
  router.get("/", posts.findAll);

  app.use("/api/posts", router);
};
