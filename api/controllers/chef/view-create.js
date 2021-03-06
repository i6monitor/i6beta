module.exports = {


  friendlyName: 'View create',


  description: 'Display "Create" page.',

  inputs : {
    title : {
      type : 'string'
    },
    security : {
      type : 'number'
    },
    code : {
      type : 'string'
    },
    icon : {
      type : 'string'
    }
  },

  exits: {

    forbidden : {
      responseType : 'forbidden'
    }

  },


  fn: async function (inputs, exits) {

    if(this.req.method.toUpperCase() !=='POST') return exits.forbidden();
    let model = await View.create(inputs);
    // Respond with view.
    return exits.success({message:'success', error : false});

  }


};
