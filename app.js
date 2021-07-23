const { createTable } = require('./helpers/multiply')
const argv = require('./config/yargs');
const colors = require('colors');

const { b, l, f, t } = argv;

createTable(b, l, f, t)
  .then((fileName) => console.log(`Table created to ${fileName}`.green))
  .catch((error) => console.log(`${error}`.red));