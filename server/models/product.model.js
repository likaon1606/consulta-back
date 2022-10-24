const { DataTypes } = require("sequelize");
const { db } = require("../utils/database");

const { Category } = require("./category.model");

const Product = db.define(
  "product",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    url_image: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    price: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    discount: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.STRING,
      references: {
        model: Category,
        key: 'id',
      },
      field: 'category'
    },
  },
  { freezeTableName: true,
  }
); // don´t pluralize

module.exports = { Product };
