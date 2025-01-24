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
import AirportsAction from "./modules/Airports/AirportsAction";
router.get("/api/airports", AirportsAction.browse);

import PlanesAction from "./modules/Planes/PlanesAction";
router.get("/api/planes", PlanesAction.browse);
router.get("/api/planes/:id", PlanesAction.read);
import CabinesActions from "./modules/Cabines/CabinesActions";
router.get("/api/cabines", CabinesActions.browse);

import PrestationsAction from "./modules/Prestations/PrestationsAction";
router.get("/api/prestations", PrestationsAction.browse);

import UserActions from "./modules/User/UserActions";
// router.get("/api/user", UserActions.browse);
// router.get("/api/user/:id", UserActions.read)
router.post("/api/user", UserActions.add);

export default router;
