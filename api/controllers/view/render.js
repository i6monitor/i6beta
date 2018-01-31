/*===============================================================
    Render view dari model View

=================================================================*/
module.exports = function(req,res){
    let view_name = req.param('view') || 'index';
    if(view_name){
        View.findOne({name:view_name}).exec((err,viewdata)=>{
            if(viewdata){
                return res.view('pages/render',{view : viewdata});
            }else{
                return res.view('pages/render',{view : {code : '<h3>View tidak ditemukan.</h3>'}});
            }
        });

    }
}