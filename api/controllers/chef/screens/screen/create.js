module.exports = {


  friendlyName: 'Create',


  description: 'Create screen.',


  inputs: {
    name: {
      type: 'string',
      required: true
    },

    icon: {
      type: 'string'
    },

    security: {
      type: 'number'
    },

    code: {
      type: 'string'
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    var screen = await Si6_screen.create(inputs);
    return exits.success(screen || {message: 'success', error: false});

  }


};
