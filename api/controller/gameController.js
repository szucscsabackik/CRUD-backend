// const NotFoundError = require("../error/NotFoundError");
// const [notFound] = require("../middleware/errorHandler");

let players = [
    {name:"Rovar Jákob",coinCount:124},
    {name:"Poloska János",coinCount:224},
    {name:"Potrohos József",coinCount:13},
]

function getPlayers(req,res,next){
    res.status(200).json(players);
}

function addPlayer(req,res,next){
    let  {name,coinCount} = req.body || {}

    coinCount = new Number(coinCount);

    const player = {
        name,
        coinCount,
    }

    players.push(player)
    res.status(201).json(players)
}

function getPlayer(req,res,next){
    const  {playerName} = req;
    let player = players.find(player => player.name == playerName)
    res.status(200).json(player);
}

function updatePlayer(req,res,next){
    const  {playerName} = req;

    let  {name,coinCount} = req.body || {}

    coinCount = new Number(coinCount);

    let player = players.find(player => player.name == playerName)

    player.coinCount = coinCount;
    player.name = name;

    res.status(200).json(players);
}

function deletePlayer(req,res,next){
    const {playerName} = req;

    const deleteIndex = players.findIndex(player => player.name == playerName)

    if(deleteIndex === -1){
        res.status(404).json({msg:"Nincs ilyen"});
        return;
    }

    players.splice(deleteIndex,1);

    res.status(200).json(players)
}


module.exports = {
    getPlayers,
    getPlayer,
    addPlayer,
    deletePlayer,
    updatePlayer,
}