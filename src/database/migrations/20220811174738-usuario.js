module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuario', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome_completo: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        nome_usuario: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        senha: {
            type: dataTypes.STRING,
            allowNull: false
        },
        telefone: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        CPF: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        site: {
            type: dataTypes.STRING,
            allowNull: false
        },
        admin: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuario');
  }
};