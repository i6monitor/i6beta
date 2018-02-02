module.exports = {


  friendlyName: 'View Editor',


  description: 'Display "Index" page.',

  inputs : {},

  exits: {

    success: {
      responseType: 'chef_view_index'
    }

  },


  fn: async function (inputs, exits) {
    let model = await sails.helpers.getView();
    return exits.success({views : model});
  }


};
