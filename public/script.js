fetch(`/api/book/${seatId}`, {
  method: "POST"
})
.then(async (res) => {

  const text = await res.text();

  try {
    const data = JSON.parse(text);

    alert(data.message);

    if (data.message.includes("booked successfully")) {
      seatElement.classList.remove("available");
      seatElement.classList.add("booked");
    }

    if (data.message.includes("already booked")) {
      seatElement.classList.remove("booked");
      seatElement.classList.add("yellow");
    }

  } catch (err) {
    console.error("Server returned non JSON:", text);
  }

})
.catch(err => console.error("Fetch error:", err));
