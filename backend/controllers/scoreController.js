const {createScoreService, deleteScoreService} = require("../services/scoreService.js");


async function createScore(req, res, next) {
    try {
        const {score} = req.body;
        const userScore = await createScoreService(score);
        res.status(201).json(userScore);
    }catch (err){
        next(err);
    }
}

async function updateUserScore(req, res, next){
    try {
        const {userId, score} = req.body
        const newScore = await deleteScoreService(score, userId);
        res.status(200).json(newScore);
    }catch (err){
        next(err);
    }
}

async function deleteUserScore(req, res, next){
    try {
        const {id} = req.body
        await deleteScoreService(id);
        res.sendStatus(200);
    }catch (err){
        next(err);
    }
}

module.exports = {
    createScore,
    updateUserScore,
    deleteUserScore,
}
