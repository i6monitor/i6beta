module.exports = {


  friendlyName: 'View list',


  description: 'Display "List" page.',



  fn: async function (inputs, exits) {

    var data = await View.find();
    // Respond with view.
    return exits.success(data);

  }


};
