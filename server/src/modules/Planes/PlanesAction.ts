import type { RequestHandler } from "express";
import PlanesRepository from "./PlanesRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const planes = await PlanesRepository.readAll();
    // Respond with the items in JSON format
    res.status(200).json(planes);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific item based on the provided ID
    const planeId = Number(req.params.id);
    const plane = await PlanesRepository.read(planeId);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (plane == null) {
      res.sendStatus(404);
    } else {
      res.json(plane);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { read, browse };
