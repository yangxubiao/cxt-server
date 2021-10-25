const Router = require('koa-router');
const router = new Router({prefix: '/users'});
const { 
  createUser,
  findAllUsersList,
  delete: del,
  login,
  updatePassword,
  getUserById,
  updateUser,
  getAllCarsList,
  getCurrentUserAllDrivesList,
  getCurrentUser,
} = require('../controllers/users');

router.post('/createUser', createUser)

router.post('/findAllUsersList', findAllUsersList)

router.get('/:id', getUserById)

router.post('/getCurrentUser', getCurrentUser)

router.delete('/:id', del)

router.post('/login', login);

router.put('/updataPassword', updatePassword);

router.put('/updateUser', updateUser);

router.post('/getAllCarslist', getAllCarsList);

router.post('/getCurrentUserAllDrivesList', getCurrentUserAllDrivesList);

module.exports = router;