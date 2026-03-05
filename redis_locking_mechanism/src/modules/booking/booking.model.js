let seats = {
    "A1": "available",
    "A2": "booked",
    "A3": "available",
    "B2": "booked",
    "B1": "available",
    "C1": "Booked",
    "C2": "Booked",
    "B3": "available"
};const getSeatStatus = (seatId) => {
    return seats[seatId];
};
const bookSeat = (seatId) => {
    seats[seatId] = "booked";
};
export { getSeatStatus, bookSeat };