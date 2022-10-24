const { DataTypes } = require("sequelize");
const { db } = require("../utils/database");

const Category = db.define("category", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
 
},{freezeTableName: true});// don´t pluralize

module.exports = { Category };