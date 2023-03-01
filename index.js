const express = require("express");
const app = express();
app.use(express.json());
app.post("/api/user_login", (req, res) => {
  try {
    let orig_password = "r@ni170504";
    let entered_password = req.body.password;
    if (orig_password === entered_password) {
      return res
        .status(200)
        .json({ success: true, message: "successfully logged in" });
    } else {
      return res.json({ success: false, message: "Check your password" });
    }
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});
const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server is runnning at port ${PORT}`);
});
