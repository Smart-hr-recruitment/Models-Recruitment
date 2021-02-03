const mongoose = require('mongoose');

let connection;
let isConnected;

const defaultOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    returnOriginal: false,
};

exports.connection = (mongoUri, options = defaultOptions) => {
    if (isConnected) return connection;

    connection = mongoose.connect(mongoUri, options);

    isConnected = true;
    return connection;
};

exports.User = require('./models/User');
