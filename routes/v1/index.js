const router = require('express').Router();

router.use('/branches', require('./branchRoute'))

module.exports = router
