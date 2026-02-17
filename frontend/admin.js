fetch("https://fast-cab.onrender.com/api/bookings")
  .then((res) => res.json())
  .then((data) => {
    const table = document.getElementById("bookingTable");

    data.forEach((booking) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${booking.id}</td>
        <td>${booking.name}</td>
        <td>${booking.phone}</td>
        <td>${booking.pickup}</td>
        <td>${booking.drop_location}</td>
        <td>${booking.ride_datetime}</td>
      `;

      table.appendChild(row);
    });
  })
  .catch((err) => {
    console.error("Error loading bookings", err);
  });
