module.exports = {


  friendlyName: 'Get all view',


  description: '',


  inputs: {

  },


  exits: {

    success: {
      outputFriendlyName: 'All view',
      outputType: 'ref'
    },

  },


  fn: async function (inputs, exits) {

    // Get all view.
    var allView = await View.find();

    
    // Send back the result through the success exit.
    return exits.success(allView);

  }


};

