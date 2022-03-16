const objectClass = require('../classes/userAuth');
module.exports = (mongoose) => {
    const schema = new mongoose.Schema({
        login: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    });

    schema.loadClass(objectClass);
    return mongoose.model('User', schema);
}