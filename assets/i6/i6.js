"use strict";

$(document).ready(function(){
    
    const Foo = { template: '<div>foo</div>' }
    const Bar = { template: '<div>bar</div>' }

    //Inisialisasi routes
    const routes = [
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar }
    ];

    //Create router
    const router = new VueRouter({
        routes // short for `routes: routes`
    })




    i6.vue = new Vue({
    //     el: '#i6app',
    //     data: {
    //         tags : {}
    //     },
    //     mounted: function() {
    //         var socket_view = io.sails.connect();
    //         socket_view.on('realtime_update', function(payload) {
    //             this.tags = payload;
    //             console.log(this.tags);
    //         }.bind(this))
    //     }

    // });
        router
    }).$mount('#i6app');
    // console.log(i6);

});
