const path = require('path');
const { encryptToJava } = require('../utils/encrypt');

class HomeCtl {

  hello(ctx) {
    ctx.body = 'hello word';
  }

  upload(ctx) {
    const file = ctx.request.files.file;
    const basename = path.basename(file.path);
    ctx.body = encryptToJava(JSON.stringify({
      success: true,
      errorMas: '',
      errorCode: '',
      result: {
        url: `${process.env.SERVER}/uploads/${basename}`
      },
    }));
  }
}

module.exports = new HomeCtl();