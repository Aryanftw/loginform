const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }, 
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
},{timestamps:true})


userSchema.pre("save", async function(next){
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password,salt);
  next();
})

userSchema.methods.generateToken = async function(){
  try {
    console.log("🔐 Signing with secret:", process.env.JWT_SECRET_KEY);
    return jwt.sign({_id:this._id,email:this.email},process.env.JWT_SECRET_KEY,{expiresIn:"7d"})
  } catch (error) {
    res.status(500).send("Internal server error in generating token")
  }
}

const User = mongoose.model("User",userSchema)

module.exports = User