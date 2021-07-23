const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    description: 'Base number',
    demandOption: true,
  })
  .option('l', {
    alias: 'list',
    type: 'boolean',
    description: 'list result or not',
    demandOption: false,
  })
  .option('t', {
    alias: 'top',
    type: 'number',
    description: 'max number for table',
    default: 10,
    demandOption: false,
  })
  .option('f', {
    alias: 'file',
    type: 'string',
    description: 'filename to save the result',
    demandOption: false,
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'base must be a number'
    }
    return true;
  })
  .argv;

module.exports = argv;