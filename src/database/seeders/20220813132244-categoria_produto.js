'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categoria_produto', [{
      nome: 'arte2D'
  },
  {
      nome: 'arte3D'
  },
  {
      nome: 'fotografia'
  },
  {
      nome: 'colecionaveis'
  }], {});
},

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('categoria_produto', null, {});

  }
};
