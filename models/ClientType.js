const objectClass = require('../classes/clientTypes');
module.exports = (mongoose) => {
    const schema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        }
    });

    schema.loadClass(objectClass);
    return mongoose.model('ClientType', schema);
}