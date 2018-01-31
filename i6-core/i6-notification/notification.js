module.exports = {
    init : function(next){
        sails.log.info('[i6-core] starting Notifications');
        setTimeout(next, 3000);
    }
};