module.exports = {    
    init : function(next){
        sails.log.info('[i6-core] starting Historian');
        setTimeout(next, 3000);
    }
};