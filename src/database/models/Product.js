module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
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
        description: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        price: {
            type: dataTypes.FLOAT,
            allowNull: false
        },
        id_section: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'product',
        timestamps: true,
        createdAt: 'create_time',
        updatedAt: 'update_time',
        
    };
    const Product = sequelize.define(alias, cols, config)
    Product.associate = (models) => {

        Product.belongsTo(models.Section, {
            as: "section",
            foreignKey: "id_section"
        })
    }

    return Product
}