const Router = require('koa-router');
const router = new Router({prefix: '/gases'});
const { createGasSite, findAllGasesSitesList, delete: del } = require('../controllers/gases');

// 添加一个加油点
router.post('/createOilSite', createGasSite)

// 查询所有的加油点
router.get('/findAllOilSitesList', findAllGasesSitesList)

// 查询所有的加油点
router.delete('/:id', del)

module.exports = router;