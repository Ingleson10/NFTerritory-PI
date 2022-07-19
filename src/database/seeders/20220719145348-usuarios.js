'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('usuario', [{
        nome_completo: 'John Doe',
        nome_usuario: 'joaozonh',
        senha: '12332',
        telefone: 341234569,
        email: 'mfkdoçnfa@email.com',
        cpf: 78641861,
        site: 'mdosndoal.com.br',
        admin: 0
      }], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('usuario', null, {});
     
  }
};
