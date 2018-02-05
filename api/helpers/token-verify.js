module.exports = {


  friendlyName: 'Token verify',


  description: '',


  inputs: {
    token: {type: 'string'}
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    jwt.verify(token, sails.config.jwt.secret)
    // All done.
    return exits.success();

  }


};

