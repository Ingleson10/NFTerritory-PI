module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('pagamento_usuario', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo_pagamento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    banco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bandeira: {
        type: Sequelize.STRING,
        allowNull: false
    },
    conta: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cvv: {
        type: Sequelize.STRING,
        allowNull: false
    },
    validade: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('pagamento_usuario');
  }
};
