module.exports = {


  friendlyName: 'View find',


  description: 'Display "Find" page.',

  inputs : {
    page : {
      type : 'number',
      defaultsTo : 0
    },
    
  },

  exits: {

    success: {
      viewTemplatePath: 'pages\\chef\\find'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success();

  }


};
