const {createUserService, deleteAllUsersService, getUsersService} = require("../services/userService.js");


async function loginUser(req, res, next) {
    try {
        const {name} = req.body;
        const user = await createUserService(name);
        res.status(201).json(user);
    }catch (err){
        next(err);
    }
}
async function getUsers(req, res, next) {
    try {
        const users = await getUsersService();
        res.status(201).json(users);
    }catch (err){
        next(err);
    }
}

async function deleteUsers(req, res, next){
    try {
        const {id} = req.body;
        await deleteAllUsersService(id);
        res.sendStatus(200);
    }catch (err){
        next(err);
    }
}

module.exports = {
    loginUser,
    getUsers,
    deleteUsers,
}
