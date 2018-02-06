module.exports = {


  friendlyName: 'Find',


  description: 'Find screens.',


  inputs: {
    limit: {
      type: 'number',
      defaultsTo: 5
    },
    page: {
      type: 'number',
      defaultsTo: 1
    },
    search: {
      type: 'string'
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    var page = inputs.page - 1;
    var collectionsTotal = await Si6_screen.count();
    
    var filter_conditions = inputs.search ? { name: { 'like': `%${inputs.search}%`} } : undefined;

    var filteredCollections = await Si6_screen.count(filter_conditions);
    var screens = await Si6_screen.find(filter_conditions).paginate(page, inputs.limit);


    var screens_data = {
      page: inputs.page,
      collectionsTotal: collectionsTotal,
      filteredCollections: filteredCollections,
      data: screens
    }

    return exits.success(screens_data);

  }


};
