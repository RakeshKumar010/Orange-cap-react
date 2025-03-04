const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
  name: { type: String },
  phone: { type: String },
  email: { type: String, required: true },
  subject: { type: String }, 
  message: { type: String },
});

module.exports = mongoose.model("Enquiry", enquirySchema);
