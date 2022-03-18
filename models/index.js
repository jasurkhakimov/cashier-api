// const conf = require('../conf/index');
const mongoose = require('mongoose');

// const db = mongoose
//     .connect(conf.db)
//     .then(() => {
//         console.log("Successfully connected to database");
//     })
//     .catch((error) => {
//         console.log("database connection failed. exiting now...");
//         console.error(error);
//         process.exit(1);
//     });

const db = [];

db.Branch = require('./Branch')(mongoose);
db.UserType = require('./UserType')(mongoose);
db.Operation = require('./Operation')(mongoose);
db.OperationType = require('./OperationType')(mongoose);
db.ClientType = require('./ClientType')(mongoose);
db.PaymentType = require('./PaymentType')(mongoose);
db.Currency = require('./Currency')(mongoose);
db.User = require('./User')(mongoose);

console.log(db);

module.exports = db;