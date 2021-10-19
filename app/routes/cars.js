const Router = require('koa-router');
const router = new Router({prefix: '/cars'});
const { create, findAllCarsList, delete: del } = require('../controllers/cars');

// 添加一个用户
router.post('/create', create)

// 查询所有的车队
router.get('/findAllCarsList', findAllCarsList)

// 查询所有的车队
router.delete('/:id', del)

module.exports = router;