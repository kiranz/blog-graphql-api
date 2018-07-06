const env = process.env.NODE_ENV || 'development';
const config = require('./../config/db')[env];
const mongoose = require('mongoose');

module.exports = function () {
    mongoose.Promise = Promise;
    const db = mongoose.connect(config.url, { useMongoClient: true });

    mongoose.connection.on('error', function (err) {
        console.error(`Could not connect to mongo. \n ${err}`);
        process.exit(1);
    }).on('open', function () {
        console.log('Connected to MongoDB')
    });

    return db;
};
