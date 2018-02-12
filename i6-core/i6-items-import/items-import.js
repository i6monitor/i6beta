const fs = require('fs');
const path = require('path');
const async = require('async');

function importDefaultItem(next){
    let files = fs.readdirSync(i6.path.item);

    async.eachSeries(
        files,        
        (file, callback)=>{
            if(file.slice(-3).toLocaleLowerCase() == '.js'){
                let item = require(path.join(i6.path.item, file));
                if(item.name != undefined && item.items.length > 0){
                    Si6_ds_item.findOrCreate({name : item.name}, item).exec((err,payload)=>{
                        if(err){
                            sails.log.error(`[i6-data-source] import default item failed. Item name "${item.name}"`);
                        }else{
                            // sails.log.info(`[i6-data-source] import new item "${payload.name}"`);  
                        }
                        callback(null);
                    });
                }        
            }else{
                callback(null);
            }
        },
        (err)=>{
            next();
        }
    );
}

module.exports = {
    init : (next)=>{
        sails.log.info('[i6-core] Check default items');
        importDefaultItem(next);
    }
}