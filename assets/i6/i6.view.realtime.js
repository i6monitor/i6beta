"use strict";

document.addEventListener('DOMContentLoaded', function(){
    var blogposts = new Vue({
        el: '#realtime_view',
        data: {
            tags : {}
        },
        mounted: function() {
            var socket_view = io.sails.connect();
            socket_view.on('realtime_update', function(payload) {
                this.tags = payload;
            }.bind(this))
        }

    });

}, false);

