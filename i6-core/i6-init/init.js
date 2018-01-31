const fs = require('fs');
const path = require('path');
const async = require('async');
const _ = require('underscore');

/**
 * Initial configuration for i6
 */

function getInitConfigList(){
    let configs = [];
    let files = fs.readdirSync(path.join(__dirname, 'components'));
    files.forEach(file=>{
        if(file.slice(-3).toLowerCase() == '.js'){
            let config = require(path.join(__dirname, 'components', file));
            let key = Object.keys(config)[0];
            let model = key.toLowerCase();
            async.eachSeries(config[key], (conf, callback)=>{
                sails.models[model].findOrCreate({name:conf.name}, conf).exec((err)=>{
                    callback(null);
                });
            });
        }
    });

}

 module.exports = {
     init : (next)=>{
        getInitConfigList();
        next();
     }
 }