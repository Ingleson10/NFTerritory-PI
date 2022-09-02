'use strict';
const { DataTypes } = require("sequelize")
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('carrinho', { 
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    produto_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    usuario_id: {
        type: DataTypes.STRING,
        allowNull: false
    }
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('carrinho');

  }
};
