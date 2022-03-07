exports.successMSG = (res, data) => {
    return res.status(200).send({
        success: true,
        data,
        message: 'success'
    })
}

exports.errorMSG = (res, data) => {
    return res.status(404).send({
        success: false,
        data: 'An error occured!',
        message: data
    })
}

exports.authErrorMSG = (res, data) => {
    return res.status(401).send({
        success: false,
        data: 'Authorization error!',
        message: data
    })
}
