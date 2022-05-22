
const { Router } = require("express");
const { SignUp, SignIn, getMe } = require('../controllers/auth');
const {protected} =require("../middlewares/auth")
const router = Router()

router.route("/signup").post(SignUp);
router.route("/signin").post(SignIn);
router.route("/me").get(protected,getMe);



module.exports = router;