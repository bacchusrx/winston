/*
 * transports.js: Set of all transports Winston knows about
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 *
 */

var fs = require('fs'),
    path = require('path'),
    common = require('./common');

var transports = exports;

transports.Console = require('./transports/console').Console;
transports.Couchdb = require('./transports/couchdb').Couchdb;
transports.File    = require('./transports/file').File;
transports.Loggly  = require('./transports/loggly').Loggly;
transports.Webhook = require('./transports/webhook').Webhook;
