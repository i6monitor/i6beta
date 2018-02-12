const jwt = require('jsonwebtoken');
const tokenSecret = 'amanyokuduamancoy';

module.exports = {


  friendlyName: 'Token issue',


  description: '',


  inputs: {
    id : {
      type : {}
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    jwt.sign(inputs.id, sails.config.jwt.secret, sails.config.jwt.options);
    // All done.
    return exits.success();

  }


};

