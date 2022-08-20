module.exports = (sequelize, dataTypes) => {
    const alias = 'Usuario';

    const collumns = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome_completo: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        nome_usuario: {
            type: dataTypes.STRING,
            allowNull: false,
            defaultValue: '', 
                unique: {
                    msg: `Este nome de usuário já está em uso`
            }
        },
        senha: {
            type: dataTypes.STRING,
            allowNull: false
        },
        telefone: {
            type: dataTypes.STRING,
            allowNull: false,
            defaultValue: '', 
                unique: {
                    msg: `Este número de telefone já está cadastrado`
            }

        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            defaultValue: '', 
                unique: {
                    msg: `Este e-mail já está cadastrado`
            }
        },
        CPF: {
            type: dataTypes.STRING,
            allowNull: false,
            defaultValue: '', 
                unique: {
                    msg: `Este CPF já está cadastrado`
            }
        },
        site: {
            type: dataTypes.STRING,
            allowNull: false
        },
        admin: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        }
        
    }

    const config = {
        tableName: 'usuario',
        timestamps: false
    }

    const Usuario = sequelize.define(alias, collumns, config)

    Usuario.associate = (models) => {
        Usuario.hasMany(models.PagamentoUsuario, { foreignKey: 'usuario_id', as: 'usuario' });
      }

      Usuario.associate = (models) => {
        Usuario.hasMany(models.PedidoFinalizado, { foreignKey: 'usuario_id', as: 'usuario' });
      }
    
      return Usuario
}