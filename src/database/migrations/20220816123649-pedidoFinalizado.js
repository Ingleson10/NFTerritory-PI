'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('pedido_finalizado', {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      total: {
          type: dataTypes.FLOAT,
          allowNull: false
      },
      data_compra: {
          type: dataTypes.DATEONLY,
          allowNull: false
      },
      usuario_id: {
          type: dataTypes.INTEGER,
          allowNull: false
      },
      pagamento_id: {
          type: dataTypes.INTEGER,
          allowNull: false
      },
      produto_id: {
          type: dataTypes.INTEGER,
          allowNull: false
    }
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('pedido_finalizado');
  }
};
