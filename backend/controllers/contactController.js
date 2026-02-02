const db = require("../db");
const transporter = require("../config/mailer");

exports.sendMessage = (req, res) => {
  const { name, email, phone, message } = req.body;

  db.query(
    "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)",
    [name, email, phone, message]
  );

  transporter.sendMail({
    from: email,
    to: "admin@fastcab.com",
    subject: "New Contact Message",
    text: message
  });

  res.json({ success: true });
};