const Router = require('koa-router');
const router = new Router();
const { upload } = require('../controllers/home');



router.post('/upload', upload)

module.exports = router;