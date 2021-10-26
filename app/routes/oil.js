const Router = require('koa-router');
const router = new Router({prefix: '/oil'});
const { 
  getCurrentLoginGasRecord,
  createOilRecord,
  getCurrentCarOwnerGasRecord,
  getAllGasRecords,
  getCurrentGasSiteRecord,
} = require('../controllers/oil');

const { 
  createOilCleanRecord,
  updateOilCleanRecord,
  delete: delOilCleanRecord,
  getAllOilRecordRecords,
  getOilCleanRecordById,
} = require('../controllers/oilRecord');


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

// 添加一个加油点结清记录
router.post('/createOilCleanRecord', createOilCleanRecord)

// 修改加油点结清记录
router.put('/updateOilCleanRecord', updateOilCleanRecord)

// 删除加油点结清记录
router.delete('/delOilCleanRecord/:id', delOilCleanRecord)

// 获取加油点结清记录
router.post('/getAllOilRecordRecords', getAllOilRecordRecords)

// 根据 id 获取结清记录
router.get('/getOilCleanRecordById/:id', getOilCleanRecordById)

module.exports = router;