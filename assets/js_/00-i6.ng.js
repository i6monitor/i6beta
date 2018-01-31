'use strict';


var app = angular.module("i6", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : '/app/views/dashboard.html',
        controller : 'dashboardController',
        ncyBreadcrumb: {
          label: 'Home page'
        }
    })

    //Open runtime page
    .when("/runtime/:screen", {
        templateUrl : function(params){
                        return `/app/views/${params.screen}.html`;
                    },        
        ncyBreadcrumb: {
            label: 'Home page'
        }
    })

    .when("/dapur/:screen", {
        templateUrl : function(params){
                        return `/app/views/dapur/${params.screen}.html`;
                    },        
        ncyBreadcrumb: {
            label: 'Home page'
        }
    })

    // .when("/runtime/:screen/:id", {
    //     templateUrl : function(params){
    //         return `/app/views/${params.screen}.html`;
    //     },
    //     controller : params.id
    // })

    .otherwise({
        redirectTo : '/'
    })
    
});


/**
 * Integrasi sails socket dengan angular
 */
app.factory('socket', function($rootScope){
    var socket = io.sails.connect();
        return {
            on: function(eventName, callback) {
                socket.on(eventName, function() {
                    var args = arguments;
                    $rootScope.$apply(function() {
                        callback.apply(socket, args);
                    });

                });
            },

            emit: function(eventName, data, callback) {
                socket.emit(eventName, data, function() {
                    var args = arguments;
                    $rootScope.$apply(function() {
                        if (callback) {
                            callback.apply(socket, args);
                        }
                    });
                });
            }
        };
});