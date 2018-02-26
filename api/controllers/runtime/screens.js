module.exports = {


  friendlyName: 'Screens',


  description: 'Screens runtime.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    let screens = await Si6_screen.find();
    return exits.success(screens);

  }


};
