var bean = require('bean');
var bonzo = require('bonzo');
var qwery = require('qwery');

// Object literal
var options = {
    getInfo: '.show-info div',
    getAuctioneer: '.auctioneer-name',
    eventInfo: 'overlay-wrapper-hide div'
};

// Constructor function that creates Overlay object
function Overlay() {
    this.container = bonzo(qwery(options.getInfo));
    this.name = bonzo(qwery(options.getAuctioneer, this.container)); // Stores Nodelist in an array

    // Empty object literal
    this.events = {};

// Call to build and listen functions
    this._build();
    this._listen();

// Method for Overlay object
    this.showOverlay('.' + this.eventInfo[0].class);
}

Overlay.prototype._build = function() {
    this.eventInfo.hide();
    bonzo(this.eventInfo[0]).show();
};

//
Overlay.prototype._listen = function() {
    this.events.onEventClick = this._onEventClick.bind(this);
    bean.on(this.container[0], 'click', options.getAuctioneer, this.events.onEventClick);
};

Overlay.prototype._onEventClick = function(event) {
    event.preventDefault();
    this.showOverlay(event.currentTarget.hash);
};
/*
getInfo.addEventListener('click', showOverlay, false);
*/
module.exports = Overlay;