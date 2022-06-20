const Score = require("../orm/models/scoreModel");
const User = require("../orm/models/userModel")

async function createScoreService(score){
    const user = await User.findAll({
        limit: 1,
        where: {
        },
        order: [ [ 'createdAt', 'DESC' ]]
    })
    console.log(user[0].dataValues.id)
    return await Score.create({score, userId: user[0].dataValues.id})
}

async function updateScoreService(score, userId){
    return await Score.update({score}, {where: {userId}})
}

async function deleteScoreService(id){
    return await Score.destroy({where: {id}})
}

module.exports = {
    createScoreService,
    updateScoreService,
    deleteScoreService
}
