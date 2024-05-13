const express = require("express");
const router = express.Router();
const { saveUser } = require("../controller/saveUser");

router.post("/save-user", saveUser);

module.exports = router;
