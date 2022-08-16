module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('pagamento_usuario', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        tipo_pagamento: {
            type: dataTypes.STRING,
            allowNull: false
        },
        banco: {
            type: dataTypes.STRING,
            allowNull: false
        },
        bandeira: {
            type: dataTypes.STRING,
            allowNull: false
        },
        conta: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        cvv: {
            type: dataTypes.STRING,
            allowNull: false
        },
        validade: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        usuario_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('pagamento_usuario');
  }
};
