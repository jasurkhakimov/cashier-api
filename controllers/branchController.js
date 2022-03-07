const model = require('../models/index');

const {
    successMSG,
    errorMSG
} = require('../components/responseForm');

exports.addBranch = async (req, res) => {
    console.log(req.body);
    await model.Branch.addBranch(req.body).then(data => {
        successMSG(res, data)
    }).catch(err => {
        errorMSG(res, err)
    })
}

exports.getBranches = async (req, res) => {
    await model.Branch.getBranches().then(data => {
        successMSG(res, data)
    }).catch(err => {
        errorMSG(res, err)
    })
}