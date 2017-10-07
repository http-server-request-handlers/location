'use strict';

/**
 * note: this does not include the #hash, which is only available on the client side
 *
 * @link https://nodejs.org/dist/latest-v6.x/docs/api/tls.html#tls_tlssocket_encrypted
 *
 * @param {Location} Location
 *
 * @returns {string}
 */
function getHref( Location ) {
  return '%protocol//%host%url'
    .replace( '%host', Location.host )
    .replace( '%protocol', Location.protocol )
    .replace( '%url', Location.url );
}

module.exports = getHref;
