const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

// POST booking API
router.post("/book", bookingController.createBooking);
router.get("/bookings", bookingController.getAllBookings);


module.exports = router;