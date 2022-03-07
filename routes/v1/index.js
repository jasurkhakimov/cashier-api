const router = require('express').Router();

router.use('/branches', require('./branchRoute'))
router.use('/userTypes', require('./userTypeRoute'))

module.exports = router