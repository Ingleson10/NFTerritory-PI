module.exports = (sequelize, dataTypes) => {
    const alias = 'Carrinho';

    const columns = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        produto_id: {
            type: dataTypes.STRING,
            allowNull: false
        },
        usuario_id: {
            type: dataTypes.STRING,
            allowNull: false
        }
    }

    const config = {
        tableName: 'carrinho',
        timestamps: false
    }

    const Carrinho = sequelize.define(alias, columns, config);

    Carrinho.associate = (models) => {
        Carrinho.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
      }

      Carrinho.associate = (models) => {
        Carrinho.belongsTo(models.Produto, { foreignKey: 'produto_id' });
      }

    return Carrinho
}
