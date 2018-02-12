/**
 * Si6_screen.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },

    icon: {
      type: 'string',
      defaultsTo: 'fa fa-desktop',
      example: 'fa fa-desktop'
    },

    security: {
      type: 'number',
      defaultsTo: 1
    },

    code: {
      type: 'string',
      defaultsTo: '<h3> Code is empty </h3>'
    },

    // creator: {
    //   model: 'user'
    // }

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

  beforeCreate: async function(values, callback) {
    callback();
  },

  beforeUpdate: async function(values, callback){
    var criteria = values.where? values.where : values;
    await Si6_screen.backup(criteria, Si6_screen_backup);

    callback();
  },

  beforeDestroy: async function(values, callback){
    var criteria = values.where? values.where : values;
    await Si6_screen.backup(criteria, Si6_screen_backup);
    callback();
  },

  afterCreate: async function(values, callback) {
    sails.sockets.blast('model_si6_screen', {
      action: 'created',
      values: values 
    });
    
    callback();
  },
  
  afterUpdate: async function(values, callback){
    sails.sockets.blast('model_si6_screen', {
      action: 'updated',
      values: values 
    });
    
    callback();
  },
  
  afterDestroy: async function(values, callback){
    sails.sockets.blast('model_si6_screen', {
      action: 'destroyed',
      values: values 
    });
    
    callback();
  },

}