const {Router} = require("express");
const scoreController = require("../controllers/scoreController.js");

const scoreRouter = Router();

scoreRouter.post("/score", scoreController.createScore);
scoreRouter.put("/score", scoreController.updateUserScore);
scoreRouter.delete("/score", scoreController.deleteUserScore);


module.exports = scoreRouter;

