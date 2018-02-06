module.exports = {


  friendlyName: 'Find',


  description: 'Find tags.',


  inputs: {
    device: {
      type: 'string'
    },

    tag: {
      type: 'string'
    }
  },


  exits: {
    notFound: {
      responseType: 'notFound'
    }

  },


  fn: async function (inputs, exits) {
    var tag;

    if(inputs.device && typeof(i6.dataSource[inputs.device]) == 'undefined') return exits.notFound();

    if(inputs.device){
      if(inputs.tag){
        if(_.includes(inputs.tag, ',')){
          var tags = inputs.tag.split(',');
          tag=[];
          tags.forEach((_tag)=>{
            tag.push(i6.dataSource[inputs.device][_tag]);
          });
        }else{
          tag = i6.dataSource[inputs.device][inputs.tag];
        }
      }else{
        tag = i6.dataSource[inputs.device];
      }
    }else{
      tag = i6.dataSource;
    }

    if(tag) return exits.success(tag);

    return exits.notFound();

  }


};
