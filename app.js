require("dotenv").config();
const express = require("express");
const app = express();
const Data = require("./models/data");
const logger = require("./sendMail");
const connectDB=require('./db/connect')

app.use(express.json())
app.post("/",logger, async (req, res) => {
    const newdata=await Data.create(req.body)
    res.status(201).json({newdata})
});


const port = process.env.PORT;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listenning on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();