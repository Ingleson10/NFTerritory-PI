module.exports = (sequelize, dataTypes) => {
    const alias = 'PagamentoUsuario';

    const columns = {
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

    }

    const config = {
        tableName: 'pagamento_usuario',
        timestamps: false
      }

      const PagamentoUsuario = sequelize.define(alias, columns, config);

      PagamentoUsuario.associate = (models) => {
        PagamentoUsuario.belongsTo(models.Usuario, { foreignKey: 'usuario_id', as: 'usuario' });
      }
    
      return PagamentoUsuario
}