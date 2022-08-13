const bcrypt = require('bcrypt')

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('usuario', [{
        nome_completo: 'Ana Clara Custodio',
        nome_usuario: 'aninha034',
        senha: bcrypt.hashSync('senha123', 10),
        telefone: '34998595957',
        email: 'anaccustodio8@gmail.com',
        cpf: '77799965822',
        site: 'instagram.com/site',
        admin: 1
      }], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('usuario', null, {});
  }
};
