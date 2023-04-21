const express = require("express");
const app = express();
const { connectDatabase } = require("./connection/file");
const classModel = require("./models/classes");
const projectModel = require("./models/Project");
const teacherModel = require("./models/Teachers");
app.use(express.json());

app.post("/api/classes", async (req, res) => {
  try {
    const newObject = {
      classID: req.body.class_id,
      courseCode: req.body.course_code,
      dayOfWeek: req.body.weekDay,
      timeStart: req.body.startingTime,
      teacherID: req.body.teacher_ID,
    };
    const classData = new classModel(newObject);
    await classData.save();
    return res.json({ success: true, message: "Data saved Successfully" });
  } catch (error) {
    return res.status(401).json({ success: false, error: error.message });
  }
});
app.get("/classes", async (req, res) => {
  try {
    const userData = await classModel.find();
    return res.json({ success: true, data: userData });
  } catch (error) {
    return res.status(401).json({ success: false, error: error.message });
  }
});

app.post("/api/teachers", async (req, res) => {
  try {
    const newObject = {
      teacherID: req.body.teacher_id,
      name: req.body.teach_name,
      phone: req.body.mobile_no,
      email: req.body.email_Id,
    };
    const TeacherData = new teacherModel(newObject);
    await TeacherData.save();
    return res.json({ success: true, message: "Data saved Successfully" });
  } catch (error) {
    return res.status(401).json({ success: false, error: error.message });
  }
});
app.get("/teacherdetail", async (req, res) => {
  try {
    const userData = await teacherModel.find();
    return res.json({ success: true, data: userData });
  } catch (error) {
    return res.status(401).json({ success: false, error: error.message });
  }
});

app.post("/api/project", async (req, res) => {
  try {
    const newObject = {
      title: req.body.project_title,
      startDate: req.body.start_Date,
      endDate: req.body.end_Date,
      departmentID: req.body.dept_id,
      Incharge: req.body.incharge_name,
    };
    const projectData = new projectModel(newObject);
    await projectData.save();
    return res.json({ success: true, message: "Data saved Successfully" });
  } catch (error) {
    return res.status(401).json({ success: false, error: error.message });
  }
});
app.get("/projectdetail", async (req, res) => {
  try {
    const userData = await projectModel.find();
    return res.json({ success: true, data: userData });
  } catch (error) {
    return res.status(401).json({ success: false, error: error.message });
  }
});

connectDatabase();
const PORT = 1000;
app.listen(PORT, async () => {
  await console.log(`Server is running at port ${PORT}`);
});
