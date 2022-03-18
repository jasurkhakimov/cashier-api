const objectClass = require('../classes/user');
module.exports = (mongoose) => {
    const schema = new mongoose.Schema({
        fio: {
            type: String,
            required: true
        },
        branch: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        passportSeries: {
            type: String,
            required: true
        },
        passportNumber: {
            type: String,
            required: true
        },
        passportIssueDate: {
            type: String,
            required: true
        },
        passportIssuePlace: {
            type: String,
            required: true
        },
        birthday: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        account: {
            type: String,
            required: true
        },
        token: String,
        createdAt: {
            type: Date,
            default: Date.now()
        }
    });

    schema.loadClass(objectClass);
    return mongoose.model('User', schema);
}