module.exports = (sequelize, dataTypes) => {
    const alias = 'Produto';

    const columns = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: dataTypes.STRING,
            allowNull: false
        },
        preco: {
            type: dataTypes.FLOAT,
            allowNull: false
        },
        disponibilidade: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        },
        categoria_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }

    const config = {
        tableName: 'produto',
        timestamps: false
    }

    const Produto = sequelize.define(alias, columns, config)

    Produto.associate = (models) => {
        Produto.hasMany(models.CategoriaProduto, { foreignKey: 'categoria_id', as: 'produto '})
    }

    return Produto
}