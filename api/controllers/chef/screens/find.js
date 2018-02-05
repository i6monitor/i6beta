module.exports = {


  friendlyName: 'Find',


  description: 'Find screens.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    var screens = await Si6_screen.find();

    return exits.success(screens);

  }


};
