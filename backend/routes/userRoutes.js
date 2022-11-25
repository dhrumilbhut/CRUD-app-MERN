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
router.put("/editUser/:id", editUser);
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
