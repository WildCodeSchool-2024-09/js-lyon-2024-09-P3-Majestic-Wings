import type { RequestHandler } from "express";
import CabinesRepository from "./CabinesRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const cabines = await CabinesRepository.readAll();
    // Respond with the items in JSON format
    res.json(cabines);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse };
