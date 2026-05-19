import Contact from "../models/Contact.js";
import transporter from "../config/mailer.js";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Save to MongoDB
    await Contact.create({
      name,
      email,
      phone,
      message,
    });

    // Send Email
    await transporter.sendMail({
      from: email,
      to: "admin@fastcab.com",
      subject: "New Contact Message",
      text: message,
    });

    res.json({
      success: true,
      message: "Message Sent",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
