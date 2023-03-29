const express = require("express");
// const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);
const app = express();
const { connectDatabase } = require("./connection/file");
const User_Model = require("./models/User");
app.use(express.json());

// const connectDatabase = () => {
//   try {
//     mongoose.connect("mongodb://127.0.0.1:27017").then(() => {
//       console.log("database connected");
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

app.post("/api/savedata", async (req, res) => {
  try {
    // console.log(req.body);
    const newObject = {
      name: req.body.username,
      rollno: req.body.userRollno,
      branch: req.body.userBranch,
      age: req.body.userAge,
      isFresher: req.body.fresher,
    };
    const userData = new User_Model(newObject);
    await userData.save();

    // console.log(newObject);
    return res.json({ success: true, message: "Data saved Succesfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});

// as we know that in a MongoDb collection,we store similar documents
//  so before storing any document in collection,we need to describe those fields
// which are been used in that collection.
// this process is called modelling.
// for each collection,one model is made in the server ,inside models
// folder models folder contain all the models which are to be used in DB.

// const { connectDatabase } = require("./file");
const a = connectDatabase();
console.log(a);
const PORT = 6000;

app.listen(PORT, async () => {
  console.log(`Server is running at  port ${PORT}`);
});
