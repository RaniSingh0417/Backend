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
app.post("/api/biodata",(req,res)=>{
  try {
    console.log(req.body);
    const userdata = {
      username:req.body.name,
      userbirthdate:req.body.birthdate,
      useraddress:req.body.address,
      userphonenumber:req.body.phonenumber,
      userlinkedinid:req.body.linkedinid,
      usergithubid:req.body.githubid,
      useremail:req.body.email,
    };
    console.log(userdata);
    return res.status(200).json({success:true,message:"biodata"});
  } catch (error) {
    return res.status(401).json({success:false,error:error.message});
  }
});
app.post("/api/emailvalidation",(req,res)=>{
try {
  console.log(req.body);
  let orig_password="Webies123@#";
  let entered_password=req.body.paswword;
  if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email))
  {
   if(orig_password===entered_password){
    return res.json({success:true,message:"logged in Succesfully"});
   }
   else{
    return res.json({success:false,message:"please check your password"});
   }
  }
  else{
    return res.json({success:false,message:"please enter valid email id"});
  }

} catch (error) {
  return res.status(400).json({success:false,message:error.message});
}
});
// We can validate the email by the help of JavaScript.

// There are many criteria that need to be follow to validate the email id such as:

// email id must contain the @ and . character
// There must be at least one character before and after the @.
// There must be at least two characters after . (dot).
//access entered email in new variable
// then find the length and store it in another variable
// then find the position of @ by using index of
// then find position of dot similarly

const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server is runnning at port ${PORT}`);
});
