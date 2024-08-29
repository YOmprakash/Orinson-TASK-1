const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const data = [];

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  
  console.log("Received form submission:", { name, email, message });
  
  // Here, you can add code to store the data in a database or send an email

  res.status(200).send("Form submitted successfully");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
