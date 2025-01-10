import type { RequestHandler } from "express";
import OptionsRepository from "./OptionsRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const options = await OptionsRepository.readAll();
    // Respond with the items in JSON format
    res.json(options);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse };
