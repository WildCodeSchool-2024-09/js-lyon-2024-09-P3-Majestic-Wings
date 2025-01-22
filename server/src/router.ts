import express from "express";

const router = express.Router();

import AuthActions from "./modules/Authentification/AuthActions";

import AirportsAction from "./modules/Airports/AirportsAction";
router.get("/api/airports", AirportsAction.browse);

import PlanesAction from "./modules/Planes/PlanesAction";
router.get("/api/planes", AuthActions.verifyToken, PlanesAction.browse);

import CabinesActions from "./modules/Cabines/CabinesActions";
router.get("/api/cabines", CabinesActions.browse);

import PrestationsAction from "./modules/Prestations/PrestationsAction";
router.get("/api/prestations", PrestationsAction.browse);

import UserActions from "./modules/User/UserActions";

router.post("/api/login", AuthActions.login);
// router.get("/api/user", UserActions.browse);
// router.get("/api/user/:id", UserActions.read)
router.post("/api/user", AuthActions.hashPassword, UserActions.add);
router.use(AuthActions.verifyToken);

export default router;
