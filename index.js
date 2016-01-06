'use strict';

var path = require('path');

var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var assets = require('metalsmith-assets');
var layouts = require('metalsmith-layouts');
var multiLanguage = require('metalsmith-multi-language');

const DEFAULT_LOCALE = 'en';
const LOCALES = ['en', 'es'];

metalsmith(__dirname)
    .source('content')
    .destination('dist')
    .use(multiLanguage({
        default: DEFAULT_LOCALE,
        locales: LOCALES
    }))
    .use(markdown())
    .use(layouts({
        engine: 'jade',
        default: 'default.jade',
        pattern: '**/*.html'
    }))
    .use(assets({
        source: 'assets'
    }))
    .build(function (err) {
        if (err) { console.error(err); }
    });
