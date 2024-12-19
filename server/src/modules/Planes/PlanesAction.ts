import type { RequestHandler } from "express";
import PlanesRepository from "./PlanesRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const planes = await PlanesRepository.readAll();
    // Respond with the items in JSON format
    res.json(planes);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse };
