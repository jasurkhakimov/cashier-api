const controller = require('../../controllers/userAuthController');

var router = require("express").Router();

router.post('/', controller.login);

// router.get('/', controller.getItems);

module.exports = router