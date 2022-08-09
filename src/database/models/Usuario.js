module.exports = (sequelize, DataTypes) => {
    const alias = 'Usuario';

    const collumns = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_completo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        //nome_de_usuario: {
            //type: DataTypes.STRING,
            //allowNull: false,
            //unique: true
        //},
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        CPF: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        site: {
            type: DataTypes.STRING,
            allowNull: true
        },
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },
        
    }

    const config = {
        tableName: 'usuario',
        timestamps: false
    }

    const Usuario = sequelize.define(alias, collumns, config)

    Usuario.associate = (models) => {
        Usuario.hasMany(models.PagamentoUsuario, { foreignKey: 'usuario_id', as: 'usuario' });
    } 
    
    return Usuario
}