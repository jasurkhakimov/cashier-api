const router = require('express').Router();

router.use('/branches', require('./branchRoute'))
router.use('/userTypes', require('./userTypeRoute'))
router.use('/operations', require('./operationRoute'))
router.use('/operationTypes', require('./operationTypeRoute'))
router.use('/clientTypes', require('./clientTypeRoute'))
router.use('/paymentTypes', require('./paymentTypeRoute'))
router.use('/currencies', require('./currencyRoute'))
router.use('/users', require('./userAuthRoute'))

module.exports = router