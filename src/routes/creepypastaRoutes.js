import express from "express";
import {getAllCreepypastas, getCreepypastaById} from "../controllers/creepypastaController.js";

const router = express.Router();

router.get("/", getAllCreepypastas);
router.get("/:id", getCreepypastaById);

export default router;