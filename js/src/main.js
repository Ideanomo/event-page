var bonzo = require('bonzo');
var Carousel = require('lib/ui/carousel');
var domready = require('domready');
var Tabs = require('lib/ui/tabs');
var qwery = require('qwery');
//var Overlay = require('lib/ui/overlay');
var Calendar = require('lib/ui/calendar');

domready(function () {
    bonzo(qwery('.carousel')).each(function(element) {
        new Carousel(element);
    });
// Creating new tabs
    bonzo(qwery('.tabs')).each(function(element) {
        new Tabs(element);
    });

    bonzo(qwery('.calendar')).each(function(element) {
        new Calendar(element);
    });
});