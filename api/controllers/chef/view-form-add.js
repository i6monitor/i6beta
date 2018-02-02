module.exports = {


  friendlyName: 'View form add',


  description: 'Display "Form add" page.',


  exits: {

    success: {
      viewTemplatePath: 'chef/gui/view/form'
    }

  },


  fn: async function (inputs, exits) {
    // Respond with view.
    return exits.success({model:{}, app : {name : 'crud', icon : 'doc', title : 'Create New View'}});

  }


};
