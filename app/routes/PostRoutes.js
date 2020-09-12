module.exports = (app) => {
  const posts = require("../controllers/PostController");
  let router = require("express").Router();

  //   create new post
  router.post("/", posts.create);
  // Retrieve all post
  router.get("/", posts.findAll);
  router.get("/:id", posts.findOne);
  router.put("/:id", posts.update);
  router.delete("/:id", posts.destroy);

  app.use("/api/posts", router);
};
