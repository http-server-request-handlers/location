'use strict';

/**
 * module dependencies
 */
var getHref = require( '../helpers/get-href' );
var getOrigin = require( '../helpers/get-origin' );
var getProtocol = require( '../helpers/get-protocol' );
var getSearch = require( '../helpers/get-search' );

/**
 * scheme:[//[user[:password]@]host[:port]][/path][?query][#fragment]
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Location
 *
 * @param {IncomingMessage} req
 *
 * @returns {undefined}
 */
function Location( req ) {
  /**
   * a string containing the host, that is the hostname, a ':', and the port of the URL
   *
   * @example developer.mozilla.org:8080
   * @type {string}
   */
  this.host = req.headers.host;

  /**
   * a string containing the domain of the URL.
   *
   * @example developer.mozilla.org
   *
   * @type {string}
   */
  this.hostname = this.host.split( ':' )[ 0 ];

  /**
   * a string containing an initial '/' followed by the path of the URL
   *
   * @example /en-US/search
   *
   * @type {string}
   */
  this.pathname = req.url.split( '?' )[ 0 ];

  /**
   * Is a DOMString containing the port number of the URL.
   *
   * @example 8080
   *
   * @type {number}
   */
  this.port = req.connection.address().port;

  /**
   * a string containing the protocol scheme of the URL, including the final ':'
   *
   * @example https:
   *
   * @type {string}
   */
  this.protocol = getProtocol( req );

  /**
   *
   * @type {string}
   */
  this.url = req.url;

  /**
   * a string containing the entire URL. if changed, the associated document navigates to the new page.
   * it can be set from a different origin than the associated document.
   *
   * - note: this does not include the #hash, which is only available on the client side
   *
   * @example https://developer.mozilla.org/en-US/search?q=URL#search-results-close-container
   *
   * @type {string}
   */
  this.href = getHref( this );

  /**
   * returns a string containing the canonical form of the origin of the specific location.
   *
   * @example https://developer.mozilla.org
   *
   * @type {string}
   */
  this.origin = getOrigin( this );

  /**
   * a string containing a '?' followed by the parameters or "querystring" of the URL.
   * modern browsers provide URLSearchParams and URL.searchParams to make it easy
   * to parse out the parameters from the querystring
   *
   * @example ?q=URL
   *
   * @type {string}
   */
  this.search = getSearch( this );
}

module.exports = Location;
