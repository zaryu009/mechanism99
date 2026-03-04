fetch(`/api/book/${seatId}`, {
  method: "POST"
})
.then(res => res.json())
.then(data => {

   alert(data.message);

   if (data.message === "Seat booked successfully") {
       seatElement.classList.remove("available");
       seatElement.classList.add("booked");
   }

   if (data.message === "Already booked") {
       seatElement.classList.remove("booked");
       seatElement.classList.add("yellow");
   }

});