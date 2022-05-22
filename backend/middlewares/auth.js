const JWT = require("jsonwebtoken");
const AuthSchema = require("../models/auth");
const { JWT_SECRET } = require("../config/index");
exports.protected = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(
      res
        .status(401)
        .json({ message: "INvalid token or you are  not authorized" })
    );
  }
  try {
    let decoded = JWT.verify(token, JWT_SECRET);
    req.user = await AuthSchema.findById(decoded.id);
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token are not authorized" });
  }
};
