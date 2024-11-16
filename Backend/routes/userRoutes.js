const express = require("express");
const {
  createUser,
  getUsers,
  getProfile,
  deleteUser,
} = require("../controllers/userController");
const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/profile", getProfile);
router.delete("/:id", deleteUser);

module.exports = router;
