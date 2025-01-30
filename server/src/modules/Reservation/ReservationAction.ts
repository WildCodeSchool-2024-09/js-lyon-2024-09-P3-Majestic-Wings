import type { RequestHandler } from "express";
import ReservationRepository from "./ReservationRespository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const reservations = await ReservationRepository.readAll();
    // Respond with the items in JSON format
    res.json(reservations);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse };
