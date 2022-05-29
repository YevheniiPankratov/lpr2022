const Router = require('express');
const { registration, login } = require('../controllers/userController');

const router = new Router();

router.post('/registration', registration);
router.post('/login', login);

module.exports = router;
