import express from "express";
import {getAllCreepypastas, getCreepypastaById, creatCreepypasta, deleteCreepypasta} from "../controllers/creepypastaController.js";

const router = express.Router();

router.get("/", getAllCreepypastas);
router.get("/:id", getCreepypastaById);
router.post("/", creatCreepypasta); 
router.delete("/:id", deleteCreepypasta);

export default router;