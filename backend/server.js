const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const bookingRoutes = require("./routes/booking"); 

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", bookingRoutes);

app.get("/", (req, res) => {
  res.send("Fast Cab Backend Running 🚕");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



