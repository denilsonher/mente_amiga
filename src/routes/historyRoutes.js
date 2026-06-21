const express = require("express");

const router = express.Router();

const historyController = require("../controllers/historyController");

router.get("/", historyController.getHistory);

router.post("/", historyController.saveHistory);

module.exports = router;