const express = require("express");
const app = express();
const { connectDatabase } = require("./connection/file");
const actorModel = require("./models/actors");
app.use(express.json());

app.post("/api/actors", async (req, res) => {
  try {
    const newObject = {
      actor_name: req.body.name,
      actor_age: req.body.age,
    };
    const actorData = new actorModel(newObject);
    await actorData.save();
    return res.json({ success: true, message: "data saved successfully" });
  } catch (error) {
    return res.status(401).json({ success: false, error: error.message });
  }
});

app.get("/user_data/:user_id", (req, res) => {
  try {
    let userid = parseInt(req.params.user_id);
    console.log(userid);
    let user_data = [
      { id: 1, name: "rani" },
      { id: 2, name: "Anjali" },
      { id: 3, name: "Princi" },
    ];
    let user = user_data.find((a) => {
      return a.id === userid;
    });
    if (user) {
      return res.json({ message: user, success: true });
    } else {
      return res.json({ message: "data not found", success: false });
    }
  } catch (error) {
    return res.status(401).json({ success: false, error: error.message });
  }
});

connectDatabase();
const PORT = 3000;
app.listen(PORT, async () => {
  await console.log(`Server is running at Port ${PORT}`);
});
