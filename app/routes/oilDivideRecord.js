const Router = require('koa-router');
const router = new Router({prefix: '/oilDivideRecord'});
const { 
  insertMany,
  getOilDivideRecord,
} = require('../controllers/oilDivideRecord');

router.post('/insertMany', insertMany)

router.post('/getOilDivideRecord', getOilDivideRecord)

module.exports = router;