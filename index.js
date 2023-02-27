const express = require("express");
const app = express();
app.use(express.json());
app.post("/api/info_submit", (req, res) => {
  try {
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.batch);
    console.log(req.body.branch);
    return res.json({ success: true, message: "testing" });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});
app.post("/api/signup", (req, res) => {
  try {
    console.log(req.body);
    console.log(req.body.userid);
    console.log(req.body.userid.username);
    console.log(req.body.userid.mobileno);
    return res.json({ success: true, message: "api" });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});
app.post("/api/flowers", (req, res) => {
  try {
    console.log(req.body);

    console.log(req.body.nationalflowers.redrose);
    console.log(req.body.nationalflowers.redrose.country);
    console.log(req.body.nationalflowers.tulip);
    console.log(req.body.nationalflowers.lotus);
    return res.json({ success: true, message: "api" });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});
const port = 8000;
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
