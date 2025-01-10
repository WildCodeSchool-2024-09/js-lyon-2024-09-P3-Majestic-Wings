import type { RequestHandler } from "express";
import ServicesRepository from "./SercvicesRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const services = await ServicesRepository.readAll();
    // Respond with the items in JSON format
    res.json(services);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse };
