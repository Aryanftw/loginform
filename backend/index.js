const express = require("express")
const dotenv = require("dotenv")
dotenv.config();
const app = express();
const cors = require("cors");
const connectDB = require("./db/db.js");
const userController = require('./routes/auth.route.js')


app.use(cors())
app.use(express.json());


connectDB().then(()=>{
  app.listen(process.env.PORT,()=>{
    console.log(`Listening on port : ${process.env.PORT}`)
  })
})

app.use('/api/auth',userController)
