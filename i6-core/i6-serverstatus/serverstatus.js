var os = require('os');
var moment = require('moment');

var status = {};

function getDuration(ms, constanta){
    constanta = constanta || 1000;
    var durations = moment.duration(ms * constanta, 'milliseconds');
    var dHours = Math.floor(durations.asHours());
    var dMinutes = Math.floor(durations.asMinutes()) - (dHours * 60);
    var dSeconds = Math.floor(durations.asSeconds()) - (dHours * 3600) - (dMinutes * 60) ;
    return `${dHours} Hr ${dMinutes} Min ${dSeconds} Sec`;
}

function getSystemStatus(){
    status.host = {
        hostname : os.hostname(),
        uptime : getDuration(os.uptime),
        freememory : `${(os.freemem/1000000).toFixed(2)} MB of ${(os.totalmem / 1000000).toFixed(2)} MB`
    };

    status.i6 = {
        uptime : getDuration(process.uptime()),
        usedmemory : `${(process.memoryUsage().rss /1000000).toFixed(2)} MB`
    }

    sails.sockets.blast('serverstatus', status);
}

status.init = function(next){
    getSystemStatus();
    next();
};

setInterval(getSystemStatus, 1000);

module.exports = status;