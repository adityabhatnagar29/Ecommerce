const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize with MySQL connection details
const sequelize = new Sequelize('product', 'root', 'root', {
    host: 'localhost', // e.g., 'localhost' or your RDS endpoint
    dialect: 'mysql',
    logging: false, // Set to true if you want to log SQL queries
});

// Define the Student model
const Student = sequelize.define('Student', {
    Productname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ProductPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING,
    },
    ProductId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
    }
}, {
    tableName: 'students', // The name of the table in the database
    timestamps: false // Disable timestamps if not used
});

// Export the model
module.exports = Student;

// Synchronize the model with the database
// (This will create the table if it does not exist, and update the schema if needed)
sequelize.sync()
    .then(() => console.log('Student table has been created or updated'))
    .catch(err => console.error('Unable to create table:', err));
