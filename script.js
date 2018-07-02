'use strict';

const fs = require('fs');

fs.readFile('./emotis.txt', 'utf-8', (err, data) =>{

    if (err){
        console.log(err);
    }
    else {
        console.log(data);

        const array = data.split("\n");

        const arrayObjetos = array.reduce((acc, elem) => {
            const objectSplit = elem.split("|");
            acc.push({
                emoti: objectSplit[1].trim()
                , name: objectSplit[2].trim()
                , description: objectSplit[3].trim()
                , code: objectSplit[4].trim()
            });
            return acc;
        }, []);
        const pene = "";
        fs.writeFile('emotis.json', JSON.stringify(arrayObjetos, null, 4), (err) => err ? console.log(err) : console.log('exito'));
    }

})