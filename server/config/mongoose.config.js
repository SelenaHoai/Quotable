// 1. import mongoose here
const mongoose = require('mongoose');

// 2. connect to the DB
module.exports = (DB_NAME) => {
    mongoose.connect(`mongodb://localhost/${DB_NAME}`) 
        .then(() => console.log(`Established a connection to the ${DB_NAME} db`))
        .catch(err => console.log('Something went wrong when connecting to the database ', err));

}