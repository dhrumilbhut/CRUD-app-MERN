// url path
const express = require("express");
const {
  home,
  createUser,
  editUser,
  deleteUser,
  getUsers,
} = require("../controllers/userControllers");
const router = express.Router();

router.get("/", home);
router.get("/getUsers", getUsers);
router.post("/createUser", createUser);
router.post("/editUser", editUser);
router.post("/deleteUser", deleteUser);

module.exports = router;
