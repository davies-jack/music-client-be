const { login, refresh } = require('../controllers/auth');

const router = require('express').Router();

router.post('/login', login);
router.post('/refresh', refresh);

module.exports = router;