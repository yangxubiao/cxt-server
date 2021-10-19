const path = require('path');
const dotenv = require('dotenv');

// eslint-disable-next-line no-unused-expressions
(process.env.NODE_ENV === 'development'
  ? dotenv.config({ path: path.resolve(__dirname, '../../.env.dev') }).parsed
  : dotenv.config({ path: path.resolve(__dirname, '../../.env.prod') }).parsed);
