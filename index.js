'use strict';

const { getEmoti: GetEmoti } = require('./emotiManager');

const  { generateMaps: GenerateMaps } = require('./dataGenerator');

const { mapDescription, mapName } = GenerateMaps();

module.exports = {
    getEmotiByDescription: GetEmoti( mapDescription )
    , getEmotiByName: GetEmoti( mapName )
};
