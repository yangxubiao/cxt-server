const Router = require('koa-router');
const router = new Router({prefix: '/summary'});
const { 
  queryCarOwnerGasInfo
} = require('../controllers/summary');

// 查询当前车队的所有加油以及充值总信息
router.post('/queryCarOwnerGasInfo', queryCarOwnerGasInfo)

module.exports = router;