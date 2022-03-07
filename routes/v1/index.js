const router = require('express').Router();

router.use('/branches', require('./branchRoute'))
router.use('/userTypes', require('./userTypeRoute'))
router.use('/operations', require('./operationRoute'))
router.use('/operationType', require('./operationTypeRoute'))

module.exports = router