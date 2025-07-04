const User = require("../models/user.model.js")

const bcrypt = require("bcrypt")
const register = async (req, res) => {
  try {
    
    const { name, email, password } = req.body;
    if(!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
  const userexist = await User.findOne({email});
  if (userexist) {
    return res.status(400).json({ message: "user already exist" })
  }

  const user = await User.create({name,email,password})
  console.log(password)
  const token = await user.generateToken()
  user.password = undefined
  return res.status(200).json({ user , token})
  } catch (error) {
    res.status(500).send("Error in register controller")
  }
}

const login = async (req,res) => {
      try {
        const {email,password} = req.body;
      const user = await User.findOne({email});
      if(!user){
        return res.status(400).json({message:"user not found"})
      }

      const isValidPassword = await bcrypt.compare(password,user.password)
      if(!isValidPassword){
        return res.status(400).json({message:"invalid credentials"})
      }
      const token = await user.generateToken();
      user.password = undefined
      return res.status(200).json({user,token})
      } catch (error) {
        res.status(500).send("Login controller error")
      }
}
module.exports = { register,login }