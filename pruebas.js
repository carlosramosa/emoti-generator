'use strict';

const { getEmotiFromDescription, getEmotiFromName } = require('./index');

const smile = getEmotiFromName('smiley');
console.log(JSON.stringify(smile, null, 4));