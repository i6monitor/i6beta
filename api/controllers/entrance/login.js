module.exports = {


  friendlyName: 'Login',


  description: 'Login entrance.',


  inputs: {
    emailAddress: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    }
  },


  exits: {
    badCombo: {
      responseType: 'unauthorized'
    }
  },


  fn: async function (inputs, exits) {
    var user = await Si6_user.findOne({emailAddress:inputs.emailAddress});

    // If the password doesn't match, then also exit thru "badCombo".
    await sails.stdlib('passwords').checkPassword(inputs.password, user.password)
    .intercept('incorrect', 'badCombo');

    const encryptedId = CryptographyService.encrypt(user.id);

    var response_data = {
      token: TokenService.issue({id: user.id}),
      cookie: encryptedId,
      fullName: user.fullName,
    }

    // Modify the active session instance.
    this.req.session.userId = user.id;

    return exits.success(response_data);

  }


};
