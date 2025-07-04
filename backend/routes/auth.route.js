const express = require('express');
const authController = require("../controllers/auth.controller.js");
const router = express.Router();
const verifytoken = require("../middlewares/auth.middleware.js")

router.route('/register').post(authController.register);
router.route('/login').post(authController.login)
router.get("/dashboard", verifytoken, (req, res) => {
  res.json({ message: `Welcome user ${req.user.id}` });
});
module.exports = router;