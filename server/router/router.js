const express = require("express"); 
const enquirySchema = require("../schema/enquirySchema");
const userSchema = require("../schema/userSchema");
const app = express.Router();

// post

app.post("/add-user", async (req, res) => {
  try {
    const { username, email, number, password } = req.body;

    // Check if the user already exists
    let existingUser = await userSchema.findOne({ email });
    if (existingUser) {
      return res.status(400).send("User already exists with this email");
    }

    // Create a new user
    const newUser = new userSchema({
      username,
      email,
      number,
      password, // Consider hashing this before saving
    });

    await newUser.save();
    res.status(201).send("User registered successfully");
  } catch (error) {
    res.status(500).send("Server error");
    console.error("Signup error:", error);
  }
});


app.post("/login-user", async (req, res) => {
  let result = await userSchema.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (result) {
    res.status(200).send(result);
  } else {
    res.status(401).send("Invalid Information");
    console.log("Login failed for:", req.body.email);
  }
});

app.put("/edit-user/:id", async (req, res) => {
  try {
    let result = await userSchema.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while saving the user.");
  }
});
app.get("/single-user/:id", async (req, res) => {
  let result = await userSchema.findOne({ _id: req.params.id });
  res.send(result);
});
 
app.post("/add-enquiry", async (req, res) => {
  try {
    const result = await enquirySchema.insertMany(req.body);
    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Failed to add enquiry" });
  }
}); 

// put
 
 

// get
app.get("/",(req,res)=>[
  res.send({'server':'ok'})
]) 

app.get("/enquiry", async (req, res) => {
  let result = await enquirySchema.find();
  res.send(result);
}); 
app.get("/admin", async (req, res) => {
  let result = await userSchema.find();
  res.send(result);
}); 

// delete
 
app.delete("/select-enquiry-delete", async (req, res) => {
  try {
    const { ids } = req.body; // Expecting an array of product IDs
    const result = await enquirySchema.deleteMany({ _id: { $in: ids } });
    res.status(200).json({ message: "Enquiry deleted successfully", result });
  } catch (error) {
    res.status(500).json({ message: "Error deleting enquiry", error });
  }
}); 
app.delete("/select-user-delete", async (req, res) => {
  try {
    const { ids } = req.body; // Expecting an array of product IDs
    const result = await userSchema.deleteMany({ _id: { $in: ids } });
    res.status(200).json({ message: "User deleted successfully", result });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
}); 

module.exports = app;
