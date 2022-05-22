const AuthSchema = require("../models/auth");
const bcrypt = require("bcryptjs");
const { JWT_COOKIE_EXPIRE } = require("../config/index");
const { status } = require("express/lib/response");

/* @ HTTP REQUEST POST
@ACCESS PUBLIC
URL:api/auth/signup*/

exports.SignUp = async (req, res) => {
  //write signup logic here
  let { username, email, role, password } = req.body;
  try {
    let payload = {
      username,
      email,
      role,
      password,
    };
    let user = await AuthSchema.create(payload);
    sendTokenResponse(user, 201, res);
  } catch (error) {
    console.log(error);
    res.status(501).json("server error");
  }
};

/* @ HTTP REQUEST POST
@ACCESS PUBLIC
URL:api/auth/sigin*/

exports.SignIn = async (req, res) => {
  //write signin logic here
  try {
    let { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "email and password required" });
    }
    //check user connected or not
    let user = await AuthSchema.findOne({ email }).select("+password");
    if (!user) {
      return res
        .status(401)
        .json({ message: "email is not exist in my database" });
    }

    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: " password not matched" });
    }

    sendTokenResponse(user, 201, res);
  } catch (error) {
    return res.status(500).json("server error");
  }
};
function sendTokenResponse(user, statuscode, res) {
  let token = user.getJWTtoken();
  const options = {
    expires: new Date(Date.now() + JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  res
    .status(statuscode)
    .cookie("TOKEN", token, options)
    .json({ message: "successfully stored", token });
}

exports.getMe = async (req, res, next) => {
  try {
    let user = await AuthSchema.findById(req.user.id);
    res.status(200).json({ message: "successfully fetched", user });
  } catch (error) {
    res.status(501).json({ message: "server error" });
  }
};
