import type { RequestHandler } from "express";
import PlanesRepository from "../Planes/PlanesRepository";
import ReservationRepository from "./ReservationRespository";

const getAirportId: RequestHandler = async (req, res, next) => {
  try {
    const { departureAirport, arrivalAirport } = req.body;

    const [depatureId] =
      await ReservationRepository.getAirportId(departureAirport);

    const [arrivalId] =
      await ReservationRepository.getAirportId(arrivalAirport);

    if (depatureId && arrivalId) {
      req.customData = req.customData || {}; // Assurez-vous que customData existe
      req.customData.depart = depatureId.id;
      req.customData.arrival = arrivalId.id;
      next();
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const newReservation = {
      user_id: req.body.auth.sub,
      plane_id: req.body.planeId,
      reservation_date: req.body.reservation_date,
      departure_airport_id: req.customData.depart,
      arrival_airport_id: req.customData.arrival,
    };

    const insertId = await ReservationRepository.create(newReservation);

    if (insertId !== undefined && typeof insertId === "number") {
      res.status(201).json({ insertId });
    } else {
      res.status(404);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { add, getAirportId };
