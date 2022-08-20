'use strict';
const { DataTypes } = require("sequelize")

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('produto', { 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    disponibilidade: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    artista: {
      type: DataTypes.STRING,
      allowNull: false
    }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('produto');
  }
};
