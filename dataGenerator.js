'use strict';



const GenerateMaps = () => {

    const emotis = require('./emotis.json');

    const mapDescription = new Map();
    const mapName = new Map();

    emotis.forEach(({name, description = name, code, emoti}) => {
        mapDescription.set(description, { name, description, code, emoti });
        mapName.set(name, { name, description, code, emoti });
    })
    return {
        mapDescription
        , mapName
    }
}

module.exports = {
    generateMaps: GenerateMaps
};
