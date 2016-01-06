'use strict';

var path = require('path');

var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var assets = require('metalsmith-assets');
var layouts = require('metalsmith-layouts');
var multiLanguage = require('metalsmith-multi-language');
var permalinks = require('metalsmith-permalinks');
var i18n = require('metalsmith-i18n');
var collections = require('metalsmith-collections');

const DEFAULT_LOCALE = 'en';
const LOCALES = ['en', 'es'];

metalsmith(__dirname)
    .source('content')
    .destination('dist')
    .use(collections({
        'recipes_en': 'recipes/*_en.md',
        'recipes_es': 'recipes/*_es.md'
    }))
    .use(multiLanguage({
        default: DEFAULT_LOCALE,
        locales: LOCALES
    }))
    .use(i18n({
        default: DEFAULT_LOCALE,
        locales: LOCALES,
        directory: 'locales'
    }))
    .use(markdown())
    .use(permalinks({
        relative: false,
        pattern: ':locale/:title/',
        linksets: [{
            match: { collection: 'recipes_en' },
            pattern: ':locale/recipes/:title/'
        }, {
            match: { collection: 'recipes_es' },
            pattern: ':locale/recetas/:title/'
        }]
    }))
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
