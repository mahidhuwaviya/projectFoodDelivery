import express from "express";
const router = express.Router();

import handleGetFoodItemsData from "../controllers/data.js";

router.post("/foodItems", handleGetFoodItemsData);

export default router;
