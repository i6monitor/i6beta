module.exports = {


  friendlyName: 'View update',


  description: 'Display "Update" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages\\chef\\update'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success();

  }


};
