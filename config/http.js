/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For more information on configuration, check out:
 * https://sailsjs.com/config/http
 */
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

module.exports.http = {

  /****************************************************************************
  *                                                                           *
  * Sails/Express middleware to run for every HTTP request.                   *
  * (Only applies to HTTP requests -- not virtual WebSocket requests.)        *
  *                                                                           *
  * https://sailsjs.com/documentation/concepts/middleware                     *
  *                                                                           *
  ****************************************************************************/

  middleware: {
    // order: ['cookieParser', 'session', 'upload', 'bodyParser', 'compress', 'methodOverride', 'poweredBy', '$custom', 'router', 'www', 'favicon'],
    // upload: upload, // Add the upload middleware
  },

};
