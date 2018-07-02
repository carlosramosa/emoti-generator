'use strict';

const { getEmotiByDescription, getEmotiByName } = require('./index');

const smile = getEmotiByName('smiley');
console.log(JSON.stringify(smile, null, 4));