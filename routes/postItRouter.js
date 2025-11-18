const { Router } = require("express");
const { getMessages, createMessage } = require("../controllers/postItController");

const router = Router();

router.get("/", getMessages);
router.get("/new", (req, res) => res.render("form"));
router.post("/new", createMessage);

module.exports = router;
