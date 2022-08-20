'use strict';
const { DataTypes } = require("sequelize")
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('pedido_finalizado', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      total: {
          type: DataTypes.FLOAT,
          allowNull: false
      },
      data_compra: {
          type: DataTypes.DATEONLY,
          allowNull: false
      },
      usuario_id: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      pagamento_id: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      produto_id: {
          type: DataTypes.INTEGER,
          allowNull: false
    }
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('pedido_finalizado');
  }
};
