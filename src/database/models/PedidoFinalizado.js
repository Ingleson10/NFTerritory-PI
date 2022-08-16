module.exports = (sequelize, dataTypes) => {
    const alias = 'PedidoFinalizado';

    const columns = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        total: {
            type: dataTypes.FLOAT,
            allowNull: false
        },
        data_compra: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        usuario_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        pagamento_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        produto_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }

    }

    const config = {
        tableName: 'pedido_finalizado',
        timestamps: false
      }

      const PedidoFinalizado = sequelize.define(alias, columns, config);

      PedidoFinalizado.associate = (models) => {
        PedidoFinalizado.belongsTo(models.Usuario, { foreignKey: 'usuario_id', as: 'usuario' });
      }

      PedidoFinalizado.associate = (models) => {
        PedidoFinalizado.belongsTo(models.PagamentoUsuario, { foreignKey: 'pagamento_id' });
      }

      PedidoFinalizado.associate = (models) => {
        PedidoFinalizado.belongsTo(models.Produto, { foreignKey: 'produto_id' })
      }
    
      return PedidoFinalizado
}