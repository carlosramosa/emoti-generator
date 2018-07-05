'use strict';



const GenerateMaps = () => {

    const emotis = require('../data/emotis.json');

    const mapDescription = new Map();
    const mapName = new Map();

    emotis.forEach(({name, description, code, emoti}) => {

        const descriptionValue = mapDescription.get(description) || [];
        const nameValue = mapName.get(name) || [];
        descriptionValue.push({ name, description, code, emoti });
        nameValue.push({ name, description, code, emoti });

        mapDescription.set(description, descriptionValue);
        mapName.set(name, nameValue);
    });
    return {
        mapDescription
        , mapName
    };
}

module.exports = {
    generateMaps: GenerateMaps
};
