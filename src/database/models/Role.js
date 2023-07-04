module.exports = (sequelize, dataTypes) => {
    let alias = 'Role';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(200),
            allowNull: false
        }
    };
    let config = {
        tableName: 'role',
        timestamps: true,
        createdAt: 'create_time',
        updatedAt: 'update_time',
        
    }
    const Role = sequelize.define(alias, cols, config)
    Role.associate = (models) => {
        
        Role.hasMany(models.User, {
            as: "users",
            foreignKey: "id_role"
        })
    }

    return Role
}