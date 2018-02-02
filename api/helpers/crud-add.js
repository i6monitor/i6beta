module.exports = {


  friendlyName: 'Crud add',


  description: '',


  inputs: {
    model : {
      type : 'string',
      required : true
    },

    data : {
      type : 'json',
      required : true
    }
  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/welcome'
    },
  },


  fn: async function (inputs, exits) {

    // All done.
    return exits.success();

  }


};

