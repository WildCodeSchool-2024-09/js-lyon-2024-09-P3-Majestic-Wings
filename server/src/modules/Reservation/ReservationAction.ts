// import type { RequestHandler } from "express";
// import ReservationRepository from "./ReservationRepository";

// // The B of BREAD - Browse (Read All) operation
// const edit: RequestHandler = async (req, res, next) => {
//   try {
//     // Fetch all items
//     const reservation = {

//         id:Number(req.params.id),
//         model:req.body.model,
//         airport_id:req.body.airport_id,
//         reservation_date:req.body.reservation_date
//     };

//     const affectedRows = await ReservationRepository.update(reservation);
//     // Respond with the items in JSON format
//     if (affectedRows === 0) {
//         res.sendStatus(404);
//       } else {
//         res.sendStatus(204);
//       }
//     } catch (err) {
//         // Pass any errors to the error-handling middleware
//         next(err);
//       }

// };

// export default {edit};
