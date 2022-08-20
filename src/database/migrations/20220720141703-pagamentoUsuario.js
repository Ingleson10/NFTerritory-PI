const { DataTypes } = require("sequelize")
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('pagamento_usuario', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        tipo_pagamento: {
            type: DataTypes.STRING,
            allowNull: false
        },
        banco: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bandeira: {
            type: DataTypes.STRING,
            allowNull: false
        },
        conta: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        cvv: {
            type: DataTypes.STRING,
            allowNull: false
        },
        validade: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        usuario_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('pagamento_usuario');
  }
};
