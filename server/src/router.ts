import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
// import itemActions from "./modules/item/itemActions";

// router.get("/api/items", itemActions.browse);

// router.post("/api/items", itemActions.add);

/* ************************************************************************* */
import AuthActions from "./modules/Authentification/AuthActions";

import AirportsAction from "./modules/Airports/AirportsAction";
router.get("/api/airports", AirportsAction.browse);
router.get("/api/airport", AirportsAction.display);

import PlanesAction from "./modules/Planes/PlanesAction";

router.get("/api/planes/:id", PlanesAction.read);
router.get("/api/get-planes-resa", PlanesAction.browse); // nouvelle fonction ici
router.get("/api/planes", AuthActions.verifyToken, PlanesAction.browse);

import CabinesActions from "./modules/Cabines/CabinesActions";
router.get("/api/cabines", CabinesActions.browse);

import PrestationsAction from "./modules/Prestations/PrestationsAction";
router.get("/api/prestations", PrestationsAction.browse);

import UserActions from "./modules/User/UserActions";
router.post("/api/login", AuthActions.login);
router.put("/api/profile", AuthActions.verifyToken, UserActions.edit);
router.get("/api/user/check-email", UserActions.checkEmail);
router.post("/api/user", AuthActions.hashPassword, UserActions.add);
// router.use(AuthActions.verifyToken);

import ReservationAction from "./modules/Reservation/ReservationAction";

router.post(
  "/api/reservation",
  AuthActions.verifyToken,
  ReservationAction.getAirportId,
  ReservationAction.add,
);

export default router;
