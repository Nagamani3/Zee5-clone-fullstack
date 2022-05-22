const bcrypt = require("bcryptjs/dist/bcrypt");
const { model, Schema } = require("mongoose");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRE } = require("../config");
const AuthSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please add username"],
  },
  email: {
    type: String,
    match: [
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ],
    required: [true, "Please add email"],
  },
    role: {
        type: String,
        enum: ["user", "publisher"],
        default:"user"
  },
    password: {
        type: String,
        required: [true, "please enter password"],
        minlength: 6,
        select:false,
        
  },
  resetPasswordToken: String,
  resetPasswordExpires: String,
}, { timestamps: true });
AuthSchema.pre("save", async function () {
    let salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    console.log(this)
})
 
AuthSchema.methods.getJWTtoken = function (){
   return jwt.sign({ id: this._id }, JWT_SECRET, {
    expiresIn:JWT_EXPIRE
  })
}

module.exports = model("user", AuthSchema);
