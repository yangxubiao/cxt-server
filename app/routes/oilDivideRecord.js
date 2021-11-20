const Router = require('koa-router');
const router = new Router({prefix: '/oilDivideRecord'});
const { 
  insertMany
} = require('../controllers/oilDivideRecord');

router.post('/insertMany', insertMany)

module.exports = router;