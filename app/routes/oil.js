const Router = require('koa-router');
const router = new Router({prefix: '/oil'});
const { 
  getCurrentLoginGasRecord,
  createOilRecord,
  getCurrentCarOwnerGasRecord,
  getAllGasRecords,
  getCurrentGasSiteRecord
} = require('../controllers/oil');

// 添加一个加油点
router.post('/createOilRecord', createOilRecord)

// 查询当前用户的加油记录
router.post('/getCurrentLoginGasRecord', getCurrentLoginGasRecord)

// 查询当前车队的加油记录
router.post('/getCurrentCarOwnerGasRecord', getCurrentCarOwnerGasRecord)

// 查询所有的加油记录
router.post('/getAllGasRecords', getAllGasRecords)

// 获取指定加油点的加油记录
router.post('/getCurrentGasSiteRecord', getCurrentGasSiteRecord)

module.exports = router;