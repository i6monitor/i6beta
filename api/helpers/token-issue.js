const jwt = require('jsonwebtoken');
const tokenSecret = 'amanyokuduamancoy';

module.exports = {


  friendlyName: 'Token issue',


  description: '',


  inputs: {
    payload : {
      type : {}
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    jwt.sign(inputs.payload, sails.config.jwt.secret, sails.config.jwt.options);
    // All done.
    return exits.success();

  }


};

