const controller = require('../../controllers/branchController');

var router = require("express").Router();

router.post('/', controller.addBranch);

router.get('/', controller.getBranches);

module.exports = router