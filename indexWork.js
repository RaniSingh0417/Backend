const express = require("express");
const app = express();
const { connectDatabase } = require("./connection/file");
const Booking_Model = require("./models/booking");
const CustomerData_Model = require("./models/customersdata");
const EventData_Model = require("./models/event");
const OrderData_Model = require("./models/orders");
const PaymentData_Model = require("./models/payments");
app.use(express.json());

app.post("/api/booking", async (req, res) => {
  try {
    const newObject = {
      ticketNo: req.body.userTick_no,
      custId: req.body.id,
      custName: req.body.name,
      address: req.body.userAddress,
      FlightID: req.body.flightIdNo,
      FlightName: req.body.flightname,
      dateOfJourney: req.body.date,
      FlightCharges: req.body.fare,
      FlightClass: req.body.class,
      seats: req.body.noOfSeats,
    };
    const bookingData = new Booking_Model(newObject);
    await bookingData.save();
    return res.json({ success: true, message: "data saved succesfully" });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ success: false, error: error.message });
  }
});

app.get;
app.post("/api/customersdata", async (req, res) => {
  try {
    const newObject1 = {
      customerNumber: req.body.serialNo,
      customerName: req.body.name,
      phoneNumber: req.body.number,
      city: req.body.city,
      state: req.body.State,
      postalCode: req.body.postOfficeCode,
      creditLimit: req.body.cred_limit,
    };
    const CustomerData = new CustomerData_Model(newObject1);
    await CustomerData.save();
    return res.json({ success: true, message: "data saved succesfully" });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ success: false, error: error.message });
  }
});

app.post("/api/event", async (req, res) => {
  try {
    const newObject2 = {
      eventID: req.body.event_id,
      eventType: req.body.event_type,
      eventDate: req.body.date,
      userID: req.body.user_id,
      description: req.body.descri_,
    };
    const EventData = new EventData_Model(newObject2);
    await EventData.save();
    return res.json({ success: true, message: "data saved succesfully" });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ success: false, error: error.message });
  }
});

app.post("/api/orders", async (req, res) => {
  try {
    const newObject3 = {
      orderNumber: req.body.ord_No,
      orderDate: req.body.ord_date,
      shippedDate: req.body.shipp_date,
      status: req.body.Status_,
      comments: req.body.Comment_,
      customerNumber: req.body.cust_No,
    };
    const OrderData = new OrderData_Model(newObject3);
    await OrderData.save();
    return res.json({ success: true, message: "data saved succesfully" });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ success: false, error: error.message });
  }
});

app.post("/api/payments", async (req, res) => {
  try {
    const newObject4 = {
      customerNumber: req.body.cust_No,
      CustomerName: req.body.cust_name,
      checkNumber: req.body.check_No,
      paymentDate: req.body.pay_date,
      amount: req.body.amt,
    };
    const PaymentData = new PaymentData_Model(newObject4);
    await PaymentData.save();
    return res.json({ success: true, message: "data saved succesfully" });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ success: false, error: error.message });
  }
});

connectDatabase();
const PORT = 4000;
app.listen(PORT, async () => {
  await console.log(`Server is running at port ${PORT}`);
});
