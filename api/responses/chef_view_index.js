/**
 * chefListView.js
 *
 * A custom response.
 *
 * Example usage:
 * ```
 *     return res.chefListView();
 *     // -or-
 *     return res.chefListView(optionalData);
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       somethingHappened: {
 *         responseType: 'chefListView'
 *       }
 *     }
 * ```
 *
 * ```
 *     throw 'somethingHappened';
 *     // -or-
 *     throw { somethingHappened: optionalData }
 * ```
 */

module.exports = function chef_view_index(optionalData) {
  optionalData = _.defaults({
    app : {
      name : 'crud',
      title : 'Manage View',
      icon : 'desktop',
      toolbar : ''
    }
  },optionalData);

  // optionalData = optionalData || {};
  // optionalData.app = optionalData.app || {};
  // optionalData.app.name = optionalData.app.name || 'crud';
  // optionalData.app.title = optionalData.app.title || 'Manage View';
  // optionalData.app.icon = optionalData.app.icon || 'desktop';
  // optionalData.app.toolbar = optionalData.app.toolbar || '';

  // Get access to `req` and `res`
  var req = this.req;
  var res = this.res;

  // Define the status code to send in the response.
  var statusCodeToSet = 400;

  // If no data was provided, use res.sendStatus().
  if (optionalData === undefined) {
    sails.log.info('Ran custom response: res.chefListView()');
    return res.sendStatus(statusCodeToSet);
  }
  // Else if the provided data is an Error instance, if it has
  // a toJSON() function, then always run it and use it as the
  // response body to send.  Otherwise, send down its `.stack`,
  // except in production use res.sendStatus().
  else if (_.isError(optionalData)) {
    sails.log.info('Custom response `res.chefListView()` called with an Error:', optionalData);

    // If the error doesn't have a custom .toJSON(), use its `stack` instead--
    // otherwise res.json() would turn it into an empty dictionary.
    // (If this is production, don't send a response body at all.)
    if (!_.isFunction(optionalData.toJSON)) {
      if (process.env.NODE_ENV === 'production') {
        return res.sendStatus(statusCodeToSet);
      }
      else {
        return res.status(statusCodeToSet).send(optionalData.stack);
      }
    }
  }
  // Set status code and send response data.
  else {
    return res.view('chef/gui/view/index', optionalData);
  }

};
