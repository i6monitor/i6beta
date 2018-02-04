module.exports = {


  friendlyName: 'Get view',


  description: '',


  inputs: {
    limit : {
      type : 'number',
      defaultsTo : 12
    },
    
    page : {
      type : 'number',
      defaultsTo : 0
    },

    title : {
      type : 'string',
      defaultsTo : ''
    },
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let filter;
    if(inputs.title != ''){
      filter = {
        title : {'like' : `%${inputs.title}%`}
      }
    }
    let model = await View.find(filter).paginate( inputs.page, inputs.limit);

    // All done.
    return exits.success(model);

  }


};

