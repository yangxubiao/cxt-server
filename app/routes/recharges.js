const Router = require('koa-router');
const router = new Router({prefix: '/recharges'});
const { 
  createdRecharge,
  findAllRechargesList,
  delete: del,
  getRechargeById,
  updateRecharge,
  getCurrentLoginederRechargesList,
  getCurrentUserRechargesList,
} = require('../controllers/recharges');

router.post('/createdRecharge', createdRecharge)

router.post('/findAllRechargesList', findAllRechargesList)

router.post('/getCurrentUserRechargesList', getCurrentUserRechargesList)

router.post('/getCurrentLoginederRechargesList', getCurrentLoginederRechargesList)

router.get('/:id', getRechargeById)

router.delete('/:id', del)

router.put('/updateRecharge', updateRecharge);

module.exports = router;