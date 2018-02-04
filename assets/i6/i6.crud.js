"use strict";

$(document).ready(function(){
    i6 = i6 || {};
    i6.app = i6.app || {};
    i6.app.crud = i6.app.crud || {};
    i6.app.crud.actions = i6.app.crud.actions || {};
    
    var actions = i6.app.crud.actions;

    actions.add_document = function(){
        window.location.href = window.location.pathname + '/form_add';        
    }

    actions.edit_document = function(document_id){
        window.location.href = window.location.pathname + '/form_edit?id=' + document_id;        
    }

    actions.create = function () {
        var Data = $('input[data-name], textarea[data-name]');
        var form_data = {};
        for(var i=0; i<Data.length; i++){
            var data = Data[i];            
            if($(data).data('format') == 'summernote'){
                form_data[$(data).data('name')] = $(data).summernote('code').text();
                console.log($(data).summernote('code').text());
            }else{
                form_data[$(data).data('name')] = $(data).val();
            }
        }
        var uri = window.location.href + '/create';
        $.post('./create',form_data,function(data, status){
            if(status == 'success' && !data.error){
                history.back();
            }
        });
    }

    actions.cancel = function () {
        //Back to previous page
        history.back();     
    }


    /**
     * id document yang akan dihapus
     * @param {*} document_id 
     */
    actions.delete_document = function(document_id){
        swal({
            title: 'Are you sure?',
            text: 'You will not be able to recover this view!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
          }).then(function(result){
            if (result.value) {
                var uri = window.location.pathname + '/delete';
                $.post(uri, {id : document_id})
                .done(function(data,status){
                    if(status=='success'){
                        swal(
                            'Deleted!',
                            'Your imaginary file has been deleted.',
                            'success'
                        ).then(function(result){
                            window.location.reload();
                        });
                    }else{
                        swal(
                            'Failed!',
                            'Can\'t delete view.',
                            'error'
                        );
                    }
                }).
                fail(function(){
                    swal(
                        'Failed!',
                        'Can\'t delete view.',
                        'error'
                    );
                });

                // result.dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
            } else if (result.dismiss === 'cancel') {

            }
          });
    }

    actions.restore_document = function(document_id){
        swal({
            title: 'Restore backup view?',
            text: 'The last change you made will not be saved.',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, restore it!',
            cancelButtonText: 'No, keep it'
          }).then(function(result){
            if (result.value) {
            }
          });
    }

    var obj = $('[data-app="crud"]');

    //When action button clicked
    obj.on('click', 'a[data-action]', function(e) {
        var document_id = $(this).data('id');
        var action = $(this).data('action');
        actions[action](document_id);
    });


});
