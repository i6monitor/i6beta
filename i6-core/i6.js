var async = require('async');
var path = require('path');

//Expose as global variabel
var exposeGlobal = require(path.join(__dirname, 'global.js'));
_.forEach(exposeGlobal, function(val, key) {
    global[key] = val;
});

//Buat i6 sebagai variabel global
global.i6 ={};

/**
 * i6 path
 */
i6.path = {
    item : path.join(__dirname, 'i6-items'),
    init : path.join(__dirname, 'i6-init')
};

i6.log = sails.log;

/**
 * Skill yang dimiliki i6
 *  - perhatikan urutan penulisan
 *  - setiap skill harus dimasukan kedalam folder i6-core, dengan nama folder skill dimulai dengan "i6-".
 *    contoh : i6-historian => untuk skill historian, dan nama file utamanya adalah historian.js
 *  - setiap skill harus memiliki function init(callback){}
 *  - setiap proses inisialisasi skill selesai callback harus dipanggil
 */
var skills = [
    'init',
    'serverstatus',
    'items-import',
    'calculator',
    'device',
    'historian',
    'notification'
];


i6.skills = {};
async.eachSeries(skills, function(skill, callback){
    i6.skills[skill] = require(path.join(__dirname, `i6-${skill}`, `${skill}.js`));

    //Panggil callback jika inisialisasi sudah selesai untuk melanjutkan ke inisialisasi ke skill berikutnya
    i6.skills[skill].init(callback);
},()=>{
    sails.log.info('[i6-core] Hore... all i6 capabilities are ready for use.');
    simulation();
});


function random(min, max){
    return (Math.random() * (max-min)) + min;
}

function simulation(){
    let tags = {};
    tags.temperature = random(30,40).toFixed(2); 
    tags.pressure = random(12,15).toFixed(2);
    tags.level = random(70,90).toFixed(2);
    tags.flow = random(3000,5000).toFixed(2);
    
    Datalog.create(tags).exec((err,result)=>{
        setTimeout(simulation, 1000);
    });
    sails.sockets.blast('realtime_update', tags);
}