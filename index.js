'use strict';

const { getEmoti: GetEmoti } = require('./src/emotiManager');

const  { generateMaps: GenerateMaps } = require('./src/dataGenerator');

const { mapDescription, mapName } = GenerateMaps();

module.exports = {
    getEmotiByDescription: GetEmoti( mapDescription )
    , getEmotiByName: GetEmoti( mapName )
};
