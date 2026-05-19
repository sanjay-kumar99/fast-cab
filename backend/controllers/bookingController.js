import Booking from "../models/booking.js";

export const createBooking = async (req, res) => {
  try {
    console.log("REQ BODY:", req.body);

    const { name, phone, pickup, drop_location, ride_datetime } = req.body;

    if (!name || !phone || !pickup || !drop_location || !ride_datetime) {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }

    const booking = await Booking.create({
      name,
      phone,
      pickup,
      drop_location,
      ride_datetime,
    });

    console.log("BOOKING SAVED:", booking);

    res.status(201).json({ success: true, booking });
  } catch (error) {
    console.log("FULL ERROR:", error); // 👈 ADD THIS

    res.status(500).json({
      success: false,
      message: error?.message || "Unknown Database Error",
      error: error, // temporary debugging
    });
  }
};
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });

    res.json(bookings);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
