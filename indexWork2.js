const express = require("express");
const app = express();
const { connectDatabase } = require("./connection/file");
const classModel = require("./models/classes");
const projectModel = require("./models/Project");
const teacherModel = require("./models/Teachers");
const booksModel = require("./models/books");
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
// app.get("/classes", async (req, res) => {
//   try {
//     const sortedData = await classModel.find().sort({ createdAt: -1 }).limit(2);
//     return res.json({ success: true, data: sortedData });
//   } catch (error) {
//     return res.status(401).json({ success: false, error: error.message });
//   }
// });

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

app.post("/api/books", async (req, res) => {
  try {
    const newObject = {
      book_id: req.body.bookId,
      title: req.body.book_title,
      totalPages: req.body.pageCount,
      rating: req.body.book_rating,
      published_Date: req.body.publi_date,
      publisher_id: req.body.publi_id,
    };
    const booksData = new booksModel(newObject);
    await booksData.save();
    return res.json({ success: true, message: "data saved successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});

app.get("/books", async (req, res) => {
  try {
    const books_Details = await booksModel.find();
    return res.json({ success: true, data: books_Details });
  } catch (error) {
    console.log(error);
    return res.status.json({ success: false, error: error.message });
  }
});

app.get("/books/latestentry", async (req, res) => {
  try {
    const books_Details = await booksModel.find().sort({ createdAt: -1 }); //-1 for descendind order and 1 for ascending
    return res.json({ success: true, data: books_Details });
  } catch (error) {
    console.log(error);
    return res.status.json({ success: false, error: error.message });
  }
});

app.get("/books/twobooks", async (req, res) => {
  try {
    const books_Details = await booksModel.find().limit(2);
    return res.json({ success: true, data: books_Details });
  } catch (error) {
    console.log(error);
    return res.status.json({ success: false, error: error.message });
  }
});

app.get("/books/latestthreebooks", async (req, res) => {
  try {
    const books_Details = await booksModel
      .find()
      .sort({ createdAt: -1 })
      .limit(3);
    return res.json({ success: true, data: books_Details });
  } catch (error) {
    console.log(error);
    return res.status.json({ success: false, error: error.message });
  }
});

app.get("/books/filtered", async (req, res) => {
  try {
    const books_Details = await booksModel
      .find(
        { totalPages: 783, title: "Hear Yourself" },
        { title: 1, rating: 1 }
      )
      .sort({ createdAt: 1 })
      .limit(1);
    // filter object is always placed inside the find brackets with existing field names
    return res.json({ success: true, data: books_Details });
  } catch (error) {
    console.log(error);
    return res.status.json({ success: false, error: error.message });
  }
});

// app.get("/pagination", async (req, res) => {
//   try {
//     const data = await booksModel
//       .find()
//       .skip((pageno - 1) * 40)
//       .limit(10);
//     return res.json({ success: true, data: data });
//   } catch (error) {
//     console.log(error);
//     return res.status(404).json({ success: false, error: error.message });
//   }
// });//this will throw error because pageno is not defined

app.get("/api/findOne", async (req, res) => {
  try {
    const books_Data = await booksModel.findOne(
      {
        totalPages: 783,
      },
      { title: 1, totalPages: 1 }
    );
    return res.json({ success: true, data: books_Data });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ success: false, error: error.message });
  }
});

app.get("/api/findById/:id", async (req, res) => {
  try {
    const booksData = await booksModel.findById("64468fdbfc8498721b0fe3d8", {
      title: 1,
      rating: 1,
    });
    return res.json({ success: true, data: booksData });
  } catch (error) {
    return res.status(401).json({ success: false, error: error.message });
  }
});
app.get("/api/findById/:id", async (req, res) => {
  try {
    const booksData = await booksModel.findById(req.params.id, {
      title: 1,
      rating: 1,
    });
    return res.json({ success: true, data: booksData });
  } catch (error) {
    console.log(error);

    return res.status(401).json({ success: false, error: error.message });
  }
});

////UPDATE
app.put("/api/update/:id", async (req, res) => {
  try {
    const booksupdate = await booksModel.findByIdAndUpdate(req.params.id, {
      rating: 4,
    });
    return res.json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(403).json({ success: false, error: error.message });
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const delbook = await booksModel.findByIdAndDelete(req.params.id);
    return res.json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ success: false, error: error.message });
  }
});
connectDatabase();
const PORT = 1000;
app.listen(PORT, async () => {
  await console.log(`Server is running at port ${PORT}`);
});
