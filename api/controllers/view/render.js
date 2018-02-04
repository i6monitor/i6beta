module.exports = {


  friendlyName: 'Render 2',


  description: '',


  inputs: {

  },


  exits: {
    success : {viewTemplatePath : 'rt/render'},
    failure : {viewTemplatePath : 'rt/fail'}
  },


  fn: async function (inputs, exits) {
    let id = this.req.params.id;
    let view_rt;
    
    if(id){
      view_rt = await View.findOne({id:id});
    }

    //Sukses mendapatkan view
    if(view_rt) return exits.success({view_rt : view_rt});  

    //Jika view tidak ditemukan atau view default tidak ada
    throw exits.failure();
  }


};
