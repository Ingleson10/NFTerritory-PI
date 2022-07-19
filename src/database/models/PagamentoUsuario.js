module.exports = (sequelize, dataTypes) => {
    const alias = 'PagamentoUsuario';

    const collumns = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
            allowNull: false
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

      const PagamentoUsuario = sequelize.define(alias, collumns, config);

      PagamentoUsuario.associate = (models) => {
        PagamentoUsuario.belongToMany(models.Usuario, { foreignKey: 'usuario_id', as: 'usuario' });
      }
    
      return Usuario
}