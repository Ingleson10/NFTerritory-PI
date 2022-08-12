module.exports = (sequelize, DataTypes) => {
  const alias = "PagamentoUsuario";

  const collumns = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tipo_pagamento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    banco: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bandeira: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    conta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cvv: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    validade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  };

  const config = {
    tableName: "pagamento_usuario",
    timestamps: false,
  };

  const PagamentoUsuario = sequelize.define(alias, collumns, config);

  PagamentoUsuario.associate = (models) => {
    PagamentoUsuario.hasMany(models.Usuario, {
      foreignKey: "usuario_id",
      as: "usuario",
    });
  };

  return PagamentoUsuario;
};
