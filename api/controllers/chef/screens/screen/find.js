module.exports = {


  friendlyName: 'Find',


  description: 'Find screen.',


  inputs: {
    id: {
      type: 'string'
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    var screen = await Si6_screen.findOne(inputs);
    return exits.success(screen);

  }


};
