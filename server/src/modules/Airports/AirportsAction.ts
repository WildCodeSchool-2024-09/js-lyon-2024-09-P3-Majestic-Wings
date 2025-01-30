import type { RequestHandler } from "express";
import Airportsrespository from "./Airportsrespository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const airports = await Airportsrespository.readAll();
    // Respond with the items in JSON format
    res.json(airports);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const display: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const airports = await Airportsrespository.readPosition();
    // Respond with the items in JSON format
    res.json(airports);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, display };
