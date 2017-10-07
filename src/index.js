/* eslint no-invalid-this: off */
/* eslint consistent-this: off */

'use strict';

/**
 * module dependencies
 */
var Location = require( './models/location' );

/**
 * an http.Server request handler that adds location metadata to the IncomingMessage
 *
 * @param {IncomingMessage} req
 * @param {Object} req.location
 *
 * @param {ServerResponse} res
 * @param {Function} next
 *
 * @returns {undefined}
 */
function locationRequestHandler( req, res, next ) {
  var Server = this;

  if ( Server.debug ) {
    console.log( '[debug]', new Date(), 'locationRequestHandler()' );
  }

  if ( !req.location ) {
    req.location = new Location( req );
  }

  next();
}

module.exports = locationRequestHandler;
