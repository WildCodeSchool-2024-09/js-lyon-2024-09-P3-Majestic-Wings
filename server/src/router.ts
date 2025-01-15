import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
// import itemActions from "./modules/item/itemActions";

// router.get("/api/items", itemActions.browse);
// router.get("/api/items/:id", itemActions.read);
// router.post("/api/items", itemActions.add);

/* ************************************************************************* */
import AirportsAction from "./modules/Airports/AirportsAction";
router.get("/api/airports", AirportsAction.browse);

import PlanesAction from "./modules/Planes/PlanesAction";
router.get("/api/planes", PlanesAction.browse);

import CabinesActions from "./modules/Cabines/CabinesActions";
router.get("/api/cabines", CabinesActions.browse);

import PrestationsActions from "./modules/Prestations/PrestationsActions";
router.get("/api/prestations", PrestationsActions.browse);

import UserActions from "./modules/User/UserActions";
router.get("/api/user", UserActions.browse);
router.post("/api/user", UserActions.add);

export default router;
