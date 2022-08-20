'use strict';
const { DataTypes } = require("sequelize")

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Produto', 'imageUrl', { type: DataTypes.STRING });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Produto', 'imageUrl', { });
  }
};
