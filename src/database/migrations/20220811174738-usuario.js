module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuario', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_completo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nome_de_usuario: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    CPF: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    site: {
        type: Sequelize.STRING,
        allowNull: false
    },
    admin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0
    }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuario');
  }
};