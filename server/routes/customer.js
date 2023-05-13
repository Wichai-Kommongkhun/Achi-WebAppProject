const express = require("express");
const path = require("path")
const app = express();
const accountController = require('../controllers/customer/account-controller');
const loginController = require('../controllers/customer/login-controller');
const registerController = require('../controllers/customer/register-controller');
const aunt_middleware = require('../middlewares/aunt-middleware');
router = express.Router();

router.post('/login-post', loginController.login);
router.get('/account', accountController.getAccount);
router.post('/register-post', registerController.register)
router.post('/cutomer/info', aunt_middleware,accountController.getAccount);
router.post('/customer/update/info', aunt_middleware,accountController.updateAccount);

exports.router = router;
