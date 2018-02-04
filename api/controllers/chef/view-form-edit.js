module.exports = {


  friendlyName: 'View form edit',


  description: 'Display "Form edit" page.',

  inputs : {
    id : {type : 'string'}
  },

  exits: {

    success: {
      viewTemplatePath: 'chef/gui/view/form'
    }

  },


  fn: async function (inputs, exits) {
    var model = await View.findOne({id:inputs.id});
    return exits.success({model:model, app : {name : 'crud', icon : 'doc', title : 'Edit View'}});

  }


};
