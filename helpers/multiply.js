const fs = require('fs');
const colors = require('colors');

const createTable = async (base = 5, list = false, fileName = `table-${base}.txt`, top = 10) => {
  try {
    let output = '';

    for (let i = 1; i <= top; i++) {
      output += `${base} * ${i} = ${base * i}\n`;
    }

    if (list) {
      console.log('======================='.green);
      console.log(`      Table of ${base}`.green);
      console.log('======================='.green);
      console.log(output);
    }

    fs.writeFileSync(fileName, output);
    return fileName;
  } catch (e) {
    throw e;
  }
}

module.exports = { createTable }