module.exports = {


  friendlyName: 'Subscribe',


  description: 'Subscribe screens.',


  inputs: {

  },


  exits: {
    notSocket : {
      responseType : 'notSocket'
    }

  },


  fn: async function (inputs, exits) {
    if (!this.req.isSocket) return exits.notSocket();

    let req = this.req;

    // Get list of all users
    let screens = await Si6_screen.find();

    //Si6_screen.subscribe(this.req.socket);
    Si6_screen.subscribe(req, _.pluck(screens, 'id'));

    return exits.success({message: 'Success'});

  }


};
