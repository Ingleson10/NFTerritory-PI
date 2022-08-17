'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('produto', { 
    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: dataTypes.STRING,
        allowNull: false,
        unique: true
    },
    preco: {
        type: dataTypes.FLOAT,
        allowNull: false
    },
    disponibilidade: {
        type: dataTypes.BOOLEAN,
        allowNull: false
    },
    categoria_id: {
        type: dataTypes.INTEGER,
        allowNull: false
    }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('produto');
  }
};
