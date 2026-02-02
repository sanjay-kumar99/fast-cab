const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "yourmail@gmail.com",
    pass: "your_app_password"
  }
});