"use strict";

$(document).ready(function(){
    i6 = i6 || {};
    i6.app = i6.app || {};
    i6.app.crud = i6.app.crud || {};
    i6.app.crud.actions = i6.app.crud.actions || {};
    
    var actions = i6.app.crud.actions;

    actions.add = function(){
        window.location.href = window.location.pathname + '/add';
    }

    actions.form_add = function(){
        window.location.href = window.location.pathname + '/form_add';        
    }

    actions.create = function () {
        var Data = $('input[data-name], textarea[data-name]');
        var form_data = {};
        for(var i=0; i<Data.length; i++){
            var data = Data[i];
            form_data[$(data).data('name')] = $(data).val();
        }
        var uri = window.location.href + '/create';
        $.post('./create', form_data, function(data, status){
            console.log(status);
            console.log(data);
        });
    }

    var obj = $('[data-app="crud"]');

    //When action button clicked
    obj.on('click', 'a[data-action]', function(e) {
        let id = $(this).data('id');
        let action = $(this).data('action');
        console.log(`Action ${action} clicked.`);
        actions[action]();
    });


});
