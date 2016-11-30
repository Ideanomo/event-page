
/*
var bean = require('bean');
var bonzo = require('bonzo');
var qwery = require('qwery');

var options = {
    panelSelector: '.tabContent',
    tabSelector: '.tab a'
};

function Tabs(container) {
    this.container = bonzo(qwery(container));
    this.panels = bonzo(qwery(options.panelSelector, this.container));

    this.events = {};

    // build and listen
    this._build();
    this._listen();

    this.showTab('#' + this.panels[0].id);
}

Tabs.prototype._build = function() {
    this.panels.hide();
    bonzo(this.panels[0]).show();
};

Tabs.prototype._listen = function() {
    this.events.onTabClick = this._onTabClick.bind(this);
    bean.on(this.container[0], 'click', options.tabSelector, this.events.onTabClick);
};

Tabs.prototype._onTabClick = function(event) {
    event.preventDefault();
    this.showTab(event.currentTarget.hash);
};

Tabs.prototype.showTab = function(selector) {
    this.currentTab = selector;
    this.updateUI();
};

Tabs.prototype.updateUI = function() {
    this.panels.hide();
    bonzo(qwery('.tabSelected')).removeClass('tabSelected');
    bonzo(qwery(this.currentTab)).show();
    bonzo(qwery('a[href="' + this.currentTab + '"]', this.container)).parent().addClass('tabSelected');
};

module.exports = Tabs;*/
