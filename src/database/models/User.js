module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        lastname: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(200),
        },
        id_role: {
            type: dataTypes.INTEGER
        },

    };
    let config = {
        tableName: 'user',
        timestamps: true,
        createdAt: 'create_time',
        updatedAt: 'update_time',
        
    }
    const User = sequelize.define(alias, cols, config)
    User.associate = (models) => {
        
        User.belongsTo(models.Role, {
            as: "role",
            foreignKey: "id_role"
        })
    }

    return User
}