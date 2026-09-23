const express = require("express");
const router = express.Router();

const {getPlayers, getPlayer, addPlayer, deletePlayer, updatePlayer} = require("../controller/gameController")

router.get("/", getPlayers);

router.get("/:playerName",getPlayer);

router.param("playerName", (req,res,next,playerName) => {
    req.playerName = playerName;

    next();
})

router.delete("/:playerName", deletePlayer);

router.patch("/:playerName", updatePlayer);

router.post("/", addPlayer);

module.exports = router;