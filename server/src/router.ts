import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */
import PlanesAction from "./modules/Planes/PlanesAction";
router.get("/api/planes", PlanesAction.browse);

import AirportsAction from "./modules/Airports/AirportsAction";
router.get("/api/airports", AirportsAction.browse);

export default router;
