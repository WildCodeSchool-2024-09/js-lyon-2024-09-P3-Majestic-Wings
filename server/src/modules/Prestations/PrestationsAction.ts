import type { RequestHandler } from "express";
import PrestationsRepository from "./PrestationsRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const prestations = await PrestationsRepository.readAll();
    // Respond with the items in JSON format
    res.status(200).json(prestations);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse };
