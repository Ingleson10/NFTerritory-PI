module.exports = (sequelize, DataTypes) => {
    const alias = 'PedidoFinalizado';

    const collumns = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        total: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        data_compra: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        usuario_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pagamento_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        produto_id: {
            type: DataTypes.INTEGER,
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

    return PedidoFinalizado
}