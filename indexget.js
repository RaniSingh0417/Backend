const express = require("express"); //we import express library in our main file for
// creating our server
const app = express();
//GET api,frontend requesting for data
// app.get(address or request url,callback function)
// app.get("/branch", (req, res) => {
//   return res.json({ message: "Branch is ECE" });
// });
// trycatch is very popular method of error handling in javascript
// ?try block contains code which is to be executed and catch block
// catches error of the try block just in case if any
// this is also a

app.get("/studentdata/:id/:branch", (req, res) => {
  try {
    let userid = parseInt(req.params.id);
    console.log(userid);
    let branch = req.params.branch;
    console.log(branch);
    let student = [
      { id: 1, name: "rani", batch: 23, state: "up", branch: "ece" },
      { id: 2, name: "anjali", batch: 23, state: "up", branch: "ece" },
      { id: 1, name: "aastha", batch: 23, state: "ap", branch: "me" },
      { id: 2, name: "aastha", batch: 23, state: "ap", branch: "me" },
      { id: 3, name: "aastha", batch: 23, state: "ap", branch: "me" },
      { id: 1, name: "anjali", batch: 23, state: "mp", branch: "ce" },
      { id: 2, name: "anjali", batch: 23, state: "mp", branch: "ce" },
      { id: 3, name: "anjali", batch: 23, state: "mp", branch: "ce" },
      { id: 1, name: "princi", batch: 23, state: "tamil nadu", branch: "ee" },
    ];
    const user = student.find((a) => {
      // console.log(a);
      return a.id === userid && a.branch === branch;
    });
    if (user) {
      return res.json({ message: user, success: true });
    } else {
      return res.json({ message: "not found", success: false });
    }
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});
// app.get("/api/info/rani", (req, res) => {
//   try {
//     let students = [{ id: 1, name: "rani", batch: 23, state: "up" }];
//   } catch (error) {
//     return res.status(400).json({ success: false, error: error.message });
//   }
// });
// app.get("/info", (req, res) => {
//   let stud_info = [
//     {
//       name: "ABC",
//       class: 12,
//       address: {
//         locality: "Master colony",
//         district: "ghjhjj",
//         state: "up",
//       },
//       sec: "B",
//     },
//     {
//       name: "ABC 1",
//       class: 12,
//       address: {
//         locality: "balaji colony",
//         district: "ghjhjj",
//         state: "up",
//       },
//       sec: "B",
//     },
//   ];
//   if (stud_info.length >= 2) {
//     return res.json({ info: stud_info, success: true });
//   } else {
//     return res.json({ error: "condition not fulfilled", success: false });
//   }
// });
//   for (let a of stud_info) {
//     if (a.name == "ABC 1") {
//       return res.json({ info: a.address.locality, success: true });
//     } else {
//       return res.json({ error: "not able to found", success: false });
//     }
//   }
// });
// app.get("/name", (req, res) => {
//   return res.json({ message: "hi this is rani" });
// });
// app.get("/address", (req, res) => {
//   return res.json({ message: "address" });
// });

// app.get("/states", (req, res) => {
//   let arr = ["Andhra Pradesh", "Delhi", "UP", "MP", "Kerala"];
//   if (arr.length >= 5) {
//     return res.json({ data: arr, success: true });
//   } else {
//     return res.json({ error: "Data is less than Five", success: false });
//   }
// });
// app.get("/name", (req, res) => {
//   let arr = ["Rani", "Princi", "riya", "muskan"];
//   if (arr.length >= 4) {
//     return res.json({ data: arr, success: true });
//   } else {
//     return res.json({ error: "Data is less than Four", success: false });
//   }
// });
// app.get("/games", (req, res) => {
//   let arr = ["Football", "cricket", "golf", "volleyball"];
//   if (arr.length >= 3) {
//     return res.status(401).json({ data: arr, success: true });
//   } else {
//     return res.json({ error: "Data is less than 3", success: false });
//   }
// });
// app.get("/tools", (req, res) => {
//   let arr = ["hammer", "screwdriver"];
//   if (arr.length >= 2) {
//     return res.status(404).json({ data: arr, success: true });
//   } else {
//     return res.json({ error: "Data is less than two", success: false });
//   }
// });
// app.get("/collegename", (req, res) => {
//   let arr = ["MMMUT", "iit kgp", "iit roorkee"];
//   if (arr.length >= 3) {
//     return res.json({ data: arr, success: true });
//   } else {
//     return res.json({ error: "Data is less than 3", success: false });
//   }
// });
// app.get("/photos", (req, res) => {
//   return res.json({ message: "photos" });
// });
// app.get("/users", (req, res) => {
//   return res.json({ message: "users" });
// });
// app.get("/friends", (req, res) => {
//   return res.json({ message: "Anjali,Princi,Avanika,Sania,Aastha" });
// });


app.listen(8000, () => {
  console.log("Server is  running at Port 8000");
});
