const { DataTypes } = require("sequelize");
const sequelize = require("../db.js");
const User = require("./userModel.js");

const Score = sequelize.define('Score', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
);

User.hasMany(Score, {
    onDelete: 'CASCADE'
});
Score.belongsTo(User);

module.exports = Score;
