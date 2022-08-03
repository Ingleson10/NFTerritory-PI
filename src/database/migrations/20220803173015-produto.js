'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('produto', { 
    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: dataTypes.STRING,
        allowNull: false
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
