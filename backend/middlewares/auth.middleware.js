const jwt = require("jsonwebtoken")

const authMiddleware = async (req,res,next) => {
  try {
    const header = req.headers["authorization"]
    
    console.log("🔑 Verifying with secret:", process.env.JWT_SECRET_KEY);
        if (!header || !header.startsWith("Bearer ")) {
      return res.status(401).send("Access Denied");
    }
    const token = header.split(" ")[1]
    if(!token){
      return res.status(400).send("Access Denied")
    }
    console.log("📦 Token received:", token);
    const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error.message)
   return res.status(500).send("Internal Server Error") 
  }
}

module.exports = authMiddleware