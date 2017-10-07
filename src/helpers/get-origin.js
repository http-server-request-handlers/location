'use strict';

/**
 * @link https://nodejs.org/dist/latest-v6.x/docs/api/tls.html#tls_tlssocket_encrypted
 *
 * @param {Location} Location
 *
 * @returns {string}
 */
function getOrigin( Location ) {
  return '%protocol//%host'
    .replace( '%host', Location.host )
    .replace( '%protocol', Location.protocol );
}

module.exports = getOrigin;
