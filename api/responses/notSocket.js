/**
 * notSocket.js
 *
 * A custom response.
 *
 * Example usage:
 * ```
 *     return res.notSocket();
 *     // -or-
 *     return res.notSocket(optionalData);
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       somethingHappened: {
 *         responseType: 'notSocket'
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

module.exports = function notSocket(optionalData) {

  // Get access to `req` and `res`
  var req = this.req;
  var res = this.res;
  return res.badRequest('Only a client socket can subscribe.');
};
