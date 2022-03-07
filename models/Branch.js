const objectClass = require('../classes/branches');
module.exports = (mongoose) => {
    const schema = new mongoose.Schema({
        ID: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    });

    schema.loadClass(objectClass);
    return mongoose.model('Branch', schema);
}