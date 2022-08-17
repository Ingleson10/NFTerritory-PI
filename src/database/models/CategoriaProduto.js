module.exports = (sequelize, dataTypes) => {
    const alias = 'CategoriaProduto';

    const columns = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome: {
            type: dataTypes.STRING,
            allowNull: false
        }
    }

    const config = {
        tableName: 'categoria_produto',
        timestamps: false
    }

    const CategoriaProduto = sequelize.define(alias, columns, config);

    CategoriaProduto.associate = (models) => {
        CategoriaProduto.hasMany(models.Produto, { foreignKey: 'categoria_id' })
    }

    return CategoriaProduto
}
