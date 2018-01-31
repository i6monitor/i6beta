const _ = require('underscore');
const async = require('async');
const path = require('path');

module.exports = {
    init : function(next){
        i6.log.info('[i6-core] starting devices.');
        i6.devices = {};

        //Urutan inisialisasi device
        async.waterfall([
            getDeviceList,
            initDeviceDataSource,
            initDeviceConnection
        ], err=>{
            //Init device selesai
            i6.log.info('[i6-core] devices start finish.');
            next();
        });
    },
};

/**
 * Mengambil list device & konfigurasinya
 * @param {*} next 
 */
function getDeviceList(next){
    i6.log.info('[i6-device] get devices configuration.');
    Device.find().exec((err,devices)=>{
        if(err){
            i6.log.error('[i6-device] failed to get devices configuration.');
        }else{
            i6.log.info('[i6-device] get devices configuration success.');
        }
        next(null, devices);
    });
}

/**
 * Inisialisasi data source.
 ** Contoh format data source = i6.dataSource.PLC1.temperature001 
 * @param {*} devices List devices
 */
function initDeviceDataSource(devices, next){
    i6.log.info('[i6-device] init device & data source.');
    async.forEachSeries(
        devices,
        (device, nextDevice)=>{

            //Set configuration
            i6.devices[device.name] = device;

            //Inisialisasi data source
            if(typeof(i6.dataSource)=='undefined') i6.dataSource = {};
            if(typeof(i6.dataSource[device.name])=='undefined') i6.dataSource[device.name] = {};
            
            //i6.dataSource.PLC1.temperature
            Ds_item.findOne({name:device.items}).exec((err, payload)=>{
                _.forEach(payload.items, item=>{
                    item.value = item.initialValue || '######';
                    i6.dataSource[device.name][item.name] = item;
                });
                
                i6.devices[device.name].tags = i6.dataSource[device.name];

                //Lanjutkan ke device berikutnya
                nextDevice();
            });
        },
        (err)=>{
            if(err){
                i6.log.error('[i6-device] device & data source initialization failed.');
            }else{
                i6.log.info('[i6-device] device & data source  initialization success.');
                next(null);
            }
        }
    );
}

/**
 * Mulai sambungkan ke perangkat
 * @param {*} next 
 */
function initDeviceConnection(next){
    i6.log.info('[i6-device] start device connection.');

    let devicesList = Object.keys(i6.devices);
    async.eachSeries(devicesList, (deviceName, nextDevice)=>{
        i6.log.info(`[i6-device] start device "${deviceName}"`);
        let deviceConfig = i6.devices[deviceName];

        try{
            i6.log.info(`[i6-device]   load driver "i6-driver-${deviceConfig.driver}"`);
            var driver = require('i6-driver-s7ip');
        }catch(e){
            i6.log.error(`[i6-device]   failed to load driver "${deviceConfig.driver}". Please check driver installation or try to run "npm i -s i6-driver ${deviceConfig.driver}".`);
            return nextDevice(null);
        }

        i6.log.info(`[i6-device]   apply configuration`);
        i6.devices[deviceName] = new driver(deviceConfig);

        let device = i6.devices[deviceName];
        device.on('connectionEvent', (payload)=>{
            let self = this;
            if(payload.error){
                i6.log.error(`[i6-device][${payload.device.name}] ${payload.message}`);
            }else{
                i6.log.info(`[i6-device][${payload.device.name}] ${payload.message}`);                
            }
            
            if(device.connectionRetryCount == 0) nextDevice(null);
        });

        device.on('valueUpdateEvent', (payload)=>{
            //console.log(payload);
        });

        /**
         *  Buat struktur driver yang terintegrasi dengan event emitter
         * 
         * 
         * 
         */

    }, err=>{
        if(err) i6.log.error('[i6-device] something wrong');
        next(null);
    });
}


