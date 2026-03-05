// ================= BOOKING CONTROLLER =================
import { bookSeatService } from "./booking.service.js";

export const bookSeatController = async (req, res) => {
  try {
    const seatId = req.params.seatId;

    if (!seatId) {
      return res.status(400).json({ message: "Seat ID required" });
    }

    const result = await bookSeatService(seatId);

    return res.status(result.status).json({
      message: result.message
    });

  } catch (error) {
    console.error("Controller Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
