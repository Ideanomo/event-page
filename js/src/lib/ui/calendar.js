var bean = require('bean');
var bonzo = require('bonzo');
var qwery = require('qwery');
var Hammer = require('hammerjs');

var options =
{
    infoSelector: '.show-info',
    infoSelectorList: 'calendar-day-list',
    infoOverlaySelector: '.overlay-wrapper',
    infoOverlayToggleClass: 'overlay-wrapper-hide',
    multipleEventSelector: '.multiple-event-indicator',
    toggleSwitch: '.switch input',
    calendarGrid: 'calendar-grid',
    circleEvent: '.circle',
    listDayEvent: 'day-list',
    listDayEventClass: '.day-list',
    listDayEventToggleClass: 'day-list-hide',
    currentMonth: 'current-month',
    nextMonth: '.next',
    prevMonth: '.prev'
};

function Calendar(container) {
    this.container = bonzo(container);

    this.isTouchEnabled = 'ontouchstart' in window;
    this.interactionEvent = 'click';

//Initialize starting value for month
    this.month = 2;

    this._build();
    this._listen();
}

Calendar.prototype._build = function () {
//nothing here
};

Calendar.prototype._listen = function () {
    bean.on(this.container[0], this.interactionEvent, options.infoSelector, this.onInfoClick.bind(this));
    bean.on(this.container[0], this.interactionEvent, options.multipleEventSelector, this.onMultipleEventClick.bind(this));
    bean.on(this.container[0], this.interactionEvent, options.toggleSwitch, this.onToggleSwitchClick.bind(this));
    bean.on(this.container[0], this.interactionEvent, options.circleEvent, this.onCircleClick.bind(this));
    bean.on(this.container[0], this.interactionEvent, options.prevMonth, this.onPrevClick.bind(this));
    bean.on(this.container[0], this.interactionEvent, options.nextMonth, this.onNextClick.bind(this));

    bean.on(this.container[0], this.interactionEvent, options.listDayEventClass, function (event) {
        event.stopPropagation();
    });
};

Calendar.prototype.render = function (event) {
    var currentMonth = bonzo(qwery('#current-month'));

    //Show month
    var el = bonzo(qwery('#' + this.id));
    el.show('block');

    //Update month
    if (this.month === 3) {
        currentMonth.html('April 2016');
        //Hide other months if showing
        var hideMonth = bonzo(qwery('#default, #prev'));
        hideMonth.hide();
    } else if (this.month === 2) {
        currentMonth.html('March 2016');
        //Hide other months if showing
        var hideMonth = bonzo(qwery('#next, #prev'));
        hideMonth.hide();
        var el = bonzo(qwery('#default')); // Initialize new local variable el for DOM query as global el points to currentTarget
        el.show('block');
    } else if (this.month === 1) {
        currentMonth.html('Feb 2016');
        //Hide other months if showing
        var hideMonth = bonzo(qwery('#default, #next'));
        hideMonth.hide();
    }
};

//Click on NEXT
Calendar.prototype.onNextClick = function (event) {
    event.preventDefault();
    event.stopPropagation();

    this.month++;
    console.log(this.month);
    this.id = bonzo(event.currentTarget).data('month');
    this.render();
};

//Click on PREV
Calendar.prototype.onPrevClick = function (event) {
    event.preventDefault();
    event.stopPropagation();

    this.month--;
    console.log(this.month);
    this.id = bonzo(event.currentTarget).data('month');
    this.render();
};

Calendar.prototype.infoOverlayHide = function (event) {
    if (event) {
        event.preventDefault();
    }
    this.infoOverlayShowing.addClass(options.infoOverlayToggleClass);
    this.infoOverlayShowing = null;
};

Calendar.prototype.onInfoClick = function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (this.infoOverlayShowing) {
        this.infoOverlayHide();
    }

    var overlay = bonzo(qwery(options.infoOverlaySelector, event.currentTarget));

    overlay.toggleClass(options.infoOverlayToggleClass);

    this.infoOverlayShowing = overlay;
    bean.one(document.body, 'click', this.infoOverlayHide.bind(this));
};

Calendar.prototype.onMultipleEventClick = function (event) {
    event.preventDefault();
    event.stopPropagation();
    console.log('multiple event indicator!');
};

Calendar.prototype.onToggleSwitchClick = function (event) {
    event.stopPropagation();
    console.log('Toggle view switch!');

    this.container.toggleClass(options.calendarGrid);
};

Calendar.prototype.onCircleClickOutside = function () {
    if (this.circleShowing) {
        this.circleShowing.toggleClass(options.listDayEvent);  //Adds the class to show
        this.circleShowing = false;
        this.noEvent.show();
    }
};

Calendar.prototype.onCircleClick = function (event) {
    event.preventDefault();
    event.stopPropagation();

    // Hide placeholder text for 'no event'
    this.noEvent = bonzo(qwery('#no-event'));
    this.noEvent.hide();

    if (this.circleShowing) {
        this.circleShowing.hide();
        this.noEvent.show();
    }

    var id = bonzo(event.currentTarget).data('mon');
    var el = bonzo(qwery('#' + id));
    el.toggleClass(options.listDayEvent);

    this.circleShowing = el;

    bean.one(document.body, this.interactionEvent, this.onCircleClickOutside.bind(this));
};

module.exports = Calendar;

