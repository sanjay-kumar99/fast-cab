const db = require("../db");

exports.createBooking = (req, res) => {
  const { name, phone, pickup, drop_location, ride_datetime } = req.body;

  // Validation
  if (!name || !phone || !pickup || !drop_location || !ride_datetime) {
    return res
      .status(400)
      .json({ success: false, message: "All fields required" });
  }

  // SQL Query Fix: status aur created_at dono add kar diye hain
  const sql =
    "INSERT INTO bookings (name, phone, pickup, drop_location, ride_datetime, status, created_at) VALUES (?, ?, ?, ?, ?, 'Pending', NOW())";

  db.query(
    sql,
    [name, phone, pickup, drop_location, ride_datetime],
    (err, result) => {
      if (err) {
        console.error("DATABASE ERROR:", err);
        return res.status(500).json({
          success: false,
          message: "Database error: " + err.sqlMessage,
        });
      }
      // ✅ Print booking details in terminal
      console.log("New Booking Added:", {
        id: result.insertId,
        name,
        phone,
        pickup,
        drop_location,
        ride_datetime,
        status: "Pending",
      });

      res.json({ success: true, message: "Booking saved" });
    },
  );
};

exports.getAllBookings = (req, res) => {
  const sql = "SELECT * FROM bookings ORDER BY id DESC";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ success: false, error: err });
    res.json(results);
  });
};
