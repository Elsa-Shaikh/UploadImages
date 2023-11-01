const express = require("express");
const router = new express.Router();
const {
  addUser,
  getUser,
  deleteUser,
} = require("../controllers/userController");
const upload = require("../middleware/multerMiddleware");

//add user
router.post("/adduser", upload.single("photo"), addUser);
router.get("/getuser", getUser);
router.delete("/deleteuser/:id", deleteUser);

module.exports = router;
