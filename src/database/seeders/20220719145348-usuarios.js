'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('usuario', [
        {
          nome_completo: 'Ana Clara Custodio',
          nome_usuario: 'aninha034',
          senha: 'senha102030',
          telefone: '34998595957',
          email: 'anaccustodio8@gmail.com',
          cpf: '',
          site: '',
          admin: 1
        },
        {
          nome_completo: 'Erik Ingleson Amaral Arruda',
          nome_usuario: 'erik',
          senha: 'therain10@',
          telefone: '11930904071',
          email: 'erik_ingleson@hotmail.com',
          cpf: '',
          site: '',
          admin: 2
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('usuario', null, {});
  }
};


