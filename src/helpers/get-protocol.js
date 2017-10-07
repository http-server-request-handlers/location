'use strict';

/**
 * @link https://nodejs.org/dist/latest-v6.x/docs/api/tls.html#tls_tlssocket_encrypted
 *
 * @param {IncomingMessage} req
 * @param {net.Socket} req.connection
 * @param {boolean} req.connection.encrypted
 *
 * @returns {string}
 */
function getProtocol( req ) {
  if ( req.connection.encrypted ) {
    return 'https:';
  }

  return 'http:';
}

module.exports = getProtocol;
