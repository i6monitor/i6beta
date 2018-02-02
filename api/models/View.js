/**
 * View.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    
    // name : {
    //   type : 'string',
    //   required : true,
    //   unique : true
    // },

    security : {
      type : 'number',
      defaultsTo : 1,
      description : 'Level security yang diijinkan untuk mengakses view ini'
    },

    title : {
      type : 'string',
      required : true,
      description : 'Judul view yang ditampilkan'
    },

    icon : {
      type : 'string',
      defaultsTo : 'window-maximize',
      description : 'Icon untuk view. Menggunakan standar icon font awesome.',
      example : 'window-maximize'
    },

    code : {
      type : 'string',
      defaultsTo : '<h3> Ini adalah contoh raw code </h3>',
      description : 'Kode untuk view dalam format standar HTML'
    }

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

