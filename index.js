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
//signupAPI
// {
//   "userid":{
//       "username":"nagvanshi1705",
//       "mobileno":887697566},
//       "password":65789,
//       "DOB":17052004
//   }
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
//flowers api
// flowers
// {"nationalflowers":{
//     "redrose":{"country":"iraq"},
//     "tulip":{"country":"Hungary"},
//     "lotus":{"country":"india"}
//     }
// }
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
//dishes api postman body->raw->JSON
// {
//   "northIndia":"chole bhature",
// "southIndia":"Dosa",
// "eastIndia":"sandesh",
// "westIndia":"Dhokla"
// }
app.post("/api/dishes", (req, res) => {
  try {
    console.log(req.body);
    console.log(req.body.northIndia);
    console.log(req.body.southIndia);
    console.log(req.body.eastIndia);
    console.log(req.body.westIndia);
    return res.json({ success: true, mesaage: "dishes" });
  } catch (error) {
    return res.status(404).json({ success: false, error: error.message });
  }
});
//languages api
// {
//   "Sanskrit":"ancient language of india",
//   "Hindi":"official language of india",
//   "Gujrati":"language of gujrat and UT of Dadar and nagar haveli",
//   "Punjabi":"official language of punjab",
//   "Dogri":"language of Jammu and Kashmir"

//  }
app.post("/api/india/states/languages",(req,res)=>{
  try {
    console.log(req.body);
    console.log(req.body.Dogri);
    return res.json({success:true,message:"There are 22 recognised languages in India"})
  } catch (error) {
    return res.status(404).json({success:false,error:error.message});
  }
})
const port = 8000;
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
