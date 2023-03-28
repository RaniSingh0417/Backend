const express = require("express");
// const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);
const app = express();
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

app.post("/api/savedata", (req, res) => {
  try {
    console.log(req.body.name);
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

const { connectDatabase } = require("./file");
const a = connectDatabase();
console.log(a);
const PORT = 6000;

app.listen(PORT, async () => {
  console.log(`Server is running at  port ${PORT}`);
});
