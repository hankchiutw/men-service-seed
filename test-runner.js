'use strict';

const Mocha = require('mocha');
const mocha = new Mocha();

const read = require('fs-readdir-recursive');

addDir('./services/main/app/models');
addDir('./test');

mocha.run();

function addDir(dir){
    read(dir)
        .filter(file => file.endsWith('.spec.js'))
        .forEach(file => mocha.addFile(`${dir}/${file}`));
}
