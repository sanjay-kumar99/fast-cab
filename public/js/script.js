console.log("Fast Cab Website Loaded Successfully");

/* =========================
   NAVBAR ACTIVE AUTO
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".navbar a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (
      linkPage === currentPage ||
      (currentPage === "" && linkPage === "index.html")
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

/* =========================
   BOOKING FORM VALIDATION
========================= */
const bookingForm = document.querySelector(".booking-form");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const pickup = document.getElementById("pickup").value.trim();
    const drop_location = document.getElementById("drop_location").value.trim();
    const ride_datetime = document.getElementById("ride_datetime").value.trim();

    if (!name || !phone || !pickup || !drop_location || !ride_datetime) {
      alert("❌ Error: All fields required");
      return;
    }

    fetch("https://fast-cab.onrender.com/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        phone,
        pickup,
        drop_location,
        ride_datetime,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("✅ Booking Successful!");
        bookingForm.reset();
      })
      .catch((err) => {
        console.error(err);
        alert("❌ Server Error");
      });
  });
}

/* =========================
   CONTACT FORM → WHATSAPP
========================= */
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  if (!contactForm) return;

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // 🚫 STOP REFRESH

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMsg = document.getElementById("formMsg");

    if (!name || !phone || !message) {
      formMsg.style.color = "red";
      formMsg.innerText = "Please fill all required fields";
      return;
    }

    const whatsappNumber = "6239662067"; // without +

    const whatsappText =
      "Fast Cab Contact Form\n\n" +
      "Name: " +
      name +
      "\n" +
      "Phone: " +
      phone +
      "\n" +
      "Email: " +
      email +
      "\n" +
      "Message: " +
      message;

    const whatsappURL =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(whatsappText);

    window.open(whatsappURL, "_blank");

    formMsg.style.color = "green";
    formMsg.innerText = "Opening WhatsApp…";

    contactForm.reset();
  });
});
