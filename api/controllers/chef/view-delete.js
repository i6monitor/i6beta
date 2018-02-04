module.exports = {


  friendlyName: 'View delete',


  description: 'Display "Delete" page.',

  inputs : {
    id : {type : 'string'},
  },

  exits: {

  },


  fn: async function (inputs, exits) {
    await View.destroy({id:inputs.id});
    // Respond with view.
    return exits.success({result : {message : 'success', action : 'delete', id : inputs.id}, error : false});

  }


};
