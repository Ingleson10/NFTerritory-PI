'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('categoria_produto', { 
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: dataTypes.STRING,
            allowNull: false
        }
    }
  );

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('categoria_produto');

  }
};
