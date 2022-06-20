const User = require("../orm/models/userModel.js");
const Score = require( "../orm/models/scoreModel.js");

 async function getUsersService(){
    return await User.findAll({
        include: {
            model: Score,
            as: "Scores",
        }
    });
}

 async function createUserService(name){
    return await User.create({name})
}

 async function deleteAllUsersService(){
    return await User.destroy({where: {}})
}

module.exports = {
     getUsersService,
    createUserService,
    deleteAllUsersService
}
