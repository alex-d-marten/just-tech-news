const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// creat our User model
class User extends Model {}

// define table columns and configuration
User.init(
    {
        // define and id column
        id: {
            // use the special Sequalize DataTypes object provide what type of data it is
            type: DataTypes.INTEGER,
            // this is the equivalent of SQL's `NOT NULL` option
            allowNull: false,
            // instruct that this is the primary key
            primaryKey: true,
            // turn on auto increment
            autoIncrement: true
        },
        // define a username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // define and email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // there cannot be duplicate email values in this table
            unique: true,
            // if allow null is set to false, we can run our data through validators before creating the table data
            validate: {
                isEmail: true
            }
        },
        // define a password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // this means the pw must be at least 4 chars long
                len: [4]
            }
        }
    },
    // TABLE CONFIGURATION OPTIONS GO HERE
    {
    // pass in our imported sequelize connection (the direct connection to our database)
    sequelize,
    // dont' automatically creat createdAt/updatedAt timestamp fields
    timestamps: false,
    // dont' pluralize name of database tables
    freezeTableName: true,
    // use underscores instead of camel-casing
    underscored: true,
    // make it so our model name stays lowercase in the database
    modelName: 'user'
    }
)

module.exports = User;