import express from "express";
import { createHotel, updateHotel, deleteHotel, getHotel, getAllHotels, countByCity, countByType } from "../controllers/hotel.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createHotel);

// UPDATE
router.put("/:id", verifyAdmin, updateHotel);

// DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

// GET
router.get("/find/:id", getHotel);

// GET ALL
router.get("/", getAllHotels);

// GET ALL BY CITY
router.get("/countByCity", countByCity);

// GET ALL BY TYPE
router.get("/countByType", countByType);

export default router;
