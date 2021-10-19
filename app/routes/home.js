const Router = require('koa-router');
const router = new Router();
const { upload, hello } = require('../controllers/home');


router.get('/', hello)

router.post('/upload', upload)

module.exports = router;