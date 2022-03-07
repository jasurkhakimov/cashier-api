const objectClass = require('../classes/userTypes');
module.exports = (mongoose) => {
    const schema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        desc: {
            type: String
        },
        status: {
            type: Number,
            default: 1
        }
    });

    schema.loadClass(objectClass);
    return mongoose.model('UserType', schema);
}