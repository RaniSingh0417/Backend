const express = require("express");
const app = express();
app.use(express.json());
// app.post("/api/user_login", (req, res) => {
//   try {
//     let orig_password = "r@ni170504";
//     let entered_password = req.body.password;
//     if (orig_password === entered_password) {
//       return res
//         .status(200)
//         .json({ success: true, message: "successfully logged in" });
//     } else {
//       return res.json({ success: false, message: "Check your password" });
//     }
//   } catch (error) {
//     return res.json({ success: false, error: error.message });
//   }
// });
//create an apifrom which user can send news data following fields
app.post("/api/news",(req,res)=>{
  
  try {
    console.log(req.body);
    const newObject = {
      latestnewstitle:req.body.newstitle,
      latestnewsCategory:req.body.newsCategory,
      latestnewsdescription:req.body.newsdescription,
      latestnewsdate:req.body.newsdate,
      latestsource:req.body.source,
    latestviews:req.body.views,
    };
    console.log(newObject);
    return res.json({ success: true, message: "api" });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
})
//
//name
//birthdate
//address
//phonenumber
//hobbies
//linkedin id
//githubid
//email
const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server is runnning at port ${PORT}`);
});
