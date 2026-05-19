import express from "express";
import {
  createBooking,
  getAllBookings,
} from "../controllers/bookingController.js";

const router = express.Router();

// POST booking API
router.post("/bookings", createBooking);
router.get("/bookings", getAllBookings);

export default router;