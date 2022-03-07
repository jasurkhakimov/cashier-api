const controller = require('../../controllers/userTypeController');

var router = require("express").Router();

router.post('/', controller.addItem);

router.get('/', controller.getItems);

module.exports = router