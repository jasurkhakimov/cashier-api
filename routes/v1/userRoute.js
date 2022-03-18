const controller = require('../../controllers/userController');

var router = require("express").Router();

router.post('/', controller.addItem);

router.post('/login', controller.login);

router.get('/', controller.getItems);

module.exports = router