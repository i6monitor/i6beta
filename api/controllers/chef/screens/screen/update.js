module.exports = {


  friendlyName: 'Update',


  description: 'Update screen.',


  inputs: {
    id: {
      type: 'string'
    },

    name: {
      type: 'string'
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

    var screen_id = inputs.id;

    var screen = await Si6_screen.update({id:screen_id}, inputs);

    return exits.success(screen || {message: 'success', error: false});

  }


};
