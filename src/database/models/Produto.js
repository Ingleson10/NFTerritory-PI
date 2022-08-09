module.exports = (sequelize, DataTypes) => {
  const alias = "Produto";

  const columns = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preco: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    disponibilidade: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  };

  const config = {
    tableName: "produto",
    timestamps: false,
  };

  const Produto = sequelize.define(alias, columns, config);

  // Ver o pq não tem esse model de CategoriaProduto. Deveria ter?
//   Produto.associate = (models) => {
//     Produto.hasMany(models.CategoriaProduto, {
//       foreignKey: "categoria_id",
//       as: "produto ",
//     });
//   };

  return Produto;
};
