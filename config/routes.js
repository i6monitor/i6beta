/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  'GET /': {action : 'view-homepage-or-redirect'},

  'GET /login' : {action : 'user/view-login'},

  'GET /view' : {action : 'view/render'},

  'GET /view/:view' : {action : 'view/render'},


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝


  'PUT /login' : {action : 'user/login'},
  'GET /logout' : {action : 'user/logout'},
  'GET /report' : {action : 'report/generate'},
  
  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝


  
/*
   ██████╗██╗  ██╗███████╗███████╗    ███████╗ ██████╗ ██████╗ ██████╗ ███████╗
  ██╔════╝██║  ██║██╔════╝██╔════╝    ██╔════╝██╔════╝██╔═══██╗██╔══██╗██╔════╝
  ██║     ███████║█████╗  █████╗      ███████╗██║     ██║   ██║██████╔╝█████╗  
  ██║     ██╔══██║██╔══╝  ██╔══╝      ╚════██║██║     ██║   ██║██╔═══╝ ██╔══╝  
  ╚██████╗██║  ██║███████╗██║         ███████║╚██████╗╚██████╔╝██║     ███████╗
   ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝         ╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚══════╝
*/                                                                             
  
  'GET /chef/view' : {action : 'chef/view-index'},
  'GET /chef/view/form_add' : {action : 'chef/view-form-add'},
  'POST /chef/view/create' : {action : 'chef/view-create'},


};
