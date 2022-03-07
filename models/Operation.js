const objectClass = require('../classes/operations');
module.exports = (mongoose) => {
    const schema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        type: {
            type: mongoose.Types.ObjectId,
            required: true
        }
    });

    schema.loadClass(objectClass);
    return mongoose.model('Operation', schema);
}