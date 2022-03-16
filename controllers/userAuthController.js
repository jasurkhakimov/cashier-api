const {
    User
} = require('../models/index');
const model = User

const {
    successMSG,
    errorMSG
} = require('../components/responseForm');


exports.login = async (req, res) => {
    await model.login(req.body).then(data => {
        successMSG(res, data)
    }).catch(err => {
        errorMSG(res, err)
    })
}