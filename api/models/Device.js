/**
 * Device.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
  
      //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
      //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
      //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
      name: {
        type: 'string',
        required: true,
        unique: true,
        maxLength: 64,
        example: 'PLC1'
      },
  
      driver: {
        type: 'string',
        required: true,
        unique: false,
        maxLength: 32,
        example: 's7ip',
        description: 'Nama driver komunikasi. Drivernya bisa cek di repositoy github https://github.com/annlumia',
      },
  
      host: {
        type: 'string',
        required: false,
        unique: false,
        allowNull: true,
        maxLength: 64,
        example: '192.168.0.1',
        description : 'Device host.'
      },
  
      port: {
        type: 'string',
        required: false,
        unique: false,
        allowNull: true,
        maxLength: 16,
        example: '102',
        description : 'Port yang digunakan oleh device.'
      },
  
      node: {
        type: 'string',
        required: false,
        unique: false,
        allowNull: true,
        maxLength: 16,
        example: '1',
        description : 'Device node / id device.'
      },
  
      rack: {
        type: 'number',
        required: false,
        unique: false,
        allowNull: true,
        example: 2,
        description : 'Nomor rack.'
      },
  
      slot: {
        type: 'number',
        required: false,
        unique: false,
        allowNull: true,
        example: 2,
        description : 'Nomor slot.'
      },
  
      items: {
        type: 'string',
        required: true,
      }
  
    
  
      //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
      //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
      //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
  
  
      //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
      //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
      //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
  
    },
  
    actions:{
      list : function(){
        Device.find().exec((err,devices)=>{
          console.log(devices);
        });
      }
    }
  
  };
  
  