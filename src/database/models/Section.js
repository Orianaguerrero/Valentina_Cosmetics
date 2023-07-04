module.exports = (sequelize, dataTypes) => {
    let alias = 'Section';
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
        tableName: 'section',
        timestamps: true,
        createdAt: 'create_time',
        updatedAt: 'update_time',
        
    }
    const Section = sequelize.define(alias, cols, config)
    Section.associate = (models) => {
        
        Section.hasMany(models.Product, {
            as: "products",
            foreignKey: "id_section"
        })
    }

    return Section
}