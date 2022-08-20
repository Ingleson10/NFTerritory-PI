const { DataTypes } = require("sequelize")
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuario', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome_completo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nome_usuario: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        CPF: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        site: {
            type: DataTypes.STRING,
            allowNull: false
        },
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuario');
  }
};