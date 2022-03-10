const Router = require('koa-router');
const router = new Router({prefix: '/summary'});
const { 
  queryCarOwnerGasInfo,
  findAllSummaryList,
} = require('../controllers/summary');

// 查询当前车队的所有加油以及充值总信息
router.post('/queryCarOwnerGasInfo', queryCarOwnerGasInfo)

// 查询所有的车队剩余可用升数
router.post('/findAllSummaryList', findAllSummaryList)

module.exports = router;