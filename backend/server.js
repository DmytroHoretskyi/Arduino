const express = require("express");
const cors = require('cors');
const sequelize  = require("./orm/db.js");
const userRouter = require( "./routes/userRouter.js");
const scoreRouter = require("./routes/scoreRouter");

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(scoreRouter);

const port = 5000;

async function main() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(port, () => {console.log("server started")})
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
main();
