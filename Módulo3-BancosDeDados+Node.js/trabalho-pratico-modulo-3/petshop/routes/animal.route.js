import express from "express";
import animalController from "../controllers/animal.controller.js";

const router = express.Router();

router.post("/", animalController.createAnimal);
router.get("/", animalController.getAnimal);
router.get("/:id", animalController.getAnimais);
router.delete("/:id", animalController.deleteAnimal);
router.put("/", animalController.updateAnimal);

export default router;