const app = require('./app');
require('dotenv').config();
require('./db');

async function init() {
    await app.listen(process.env.PORT || 3001);
    console.log('%listen on port: ', process.env.PORT || 3001);
}

init();
