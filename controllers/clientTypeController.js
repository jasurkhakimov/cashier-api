const {
    ClientType
} = require('../models/index');
const model = ClientType;

const {
    successMSG,
    errorMSG
} = require('../components/responseForm');

exports.addItem = async (req, res) => {
    await model.addItem(req.body).then(data => {
        successMSG(res, data)
    }).catch(err => {
        errorMSG(res, err)
    })
}

exports.getItems = async (req, res) => {
    await model.getItems().then(data => {
        successMSG(res, data)
    }).catch(err => {
        errorMSG(res, err)
    })
}