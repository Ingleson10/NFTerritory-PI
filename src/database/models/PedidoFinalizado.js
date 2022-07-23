module.exports = (sequelize, dataTypes) => {
    const alias = 'PedidoFinalizado';

    const collumns = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        total: {
            type: dataTypes.FLOAT,
            allowNull: false
        },
        data_compra: {
            type: dataTypes.INTEGER,
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

      const PedidoFinalizado = sequelize.define(alias, collumns, config);

      PedidoFinalizado.associate = (models) => {
        PedidoFinalizado.belongToMany(models.Usuario, { foreignKey: 'usuario_id', as: 'usuario' });
      }
    
      return Usuario
}