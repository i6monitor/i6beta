module.exports = {


  friendlyName: 'Destroy',


  description: 'Destroy screen.',


  inputs: {
    id: {
      type: 'string'
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    var screen = await Si6_screen.destroy(inputs).meta({fetch: true});
    return exits.success(screen || {message: 'success', error: false});

  }


};
