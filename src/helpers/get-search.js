'use strict';

/**
 * @link https://nodejs.org/dist/latest-v6.x/docs/api/tls.html#tls_tlssocket_encrypted
 *
 * @param {Location} Location
 *
 * @returns {string}
 */
function getHref( Location ) {
  var search = Location.url.split( '?' )[ 1 ];

  if ( search ) {
    search = '?' + search;
  } else {
    search = '';
  }

  return search;
}

module.exports = getHref;
