var bean = require('bean');
var bonzo = require('bonzo');
var domready = require('domready');
var Hammer = require('hammerjs');
var Modernizr = require('modernizr');
var qwery = require('qwery');

var options = {
    carouselSelector: '.carousel',
    paneSelector: 'li',
    sliderSelector: '.carousel__wrapper',
    transitionDuration: '300',
    transitionTimingFunction: 'ease-in-out',
    transitionTimingFunctionTouch: 'ease-out'
};

var DIRECTION_BACKWARD = 1,
    DIRECTION_FORWARD = 2;

function Carousel(container) {
    this.container = bonzo(qwery(container));
    this.slider = bonzo(qwery(options.sliderSelector, this.container));
    this.panes = bonzo(qwery(options.paneSelector, this.slider));

    // set up properties
    this.direction = DIRECTION_FORWARD;
    this.interaction = 'ontouchstart' in window ? 'touchstart' : 'click';
    this.events = {};
    this.indicators = [];
    this.currentPane = 0;

    // build and listen
    this._build();
    this._listen();
}

Carousel.prototype._addIndicator = function(item) {
    var indicator = bonzo(bonzo.create('<span>')).addClass('indicator');
    this.indicators.push(indicator);
    this.indicatorContainer.append(indicator);
}

Carousel.prototype._build = function() {
    this.touchHandler = new Hammer(this.slider[0], {
        drag_lock_to_axis: true
    });

    // count panes
    this.paneCount = this.panes.length;

    // get width of panes
    this.paneWidth = parseInt(this.container.css('width'));

    // capture ui controls
    this.btnNext = bonzo(qwery('.next', this.container));
    this.btnPrev = bonzo(qwery('.prev', this.container));

    this.indicatorContainer = bonzo(qwery('.indicator-container', this.container));

    if (this.paneCount > 1) {    
        // create indicators
        this.panes.each(this._addIndicator.bind(this));
        this._updateUI();
    } else {
        this.btnNext.css('display', 'none');
        this.btnPrev.css('display', 'none');
        this.indicatorContainer.css('display', 'none');
    }
}

Carousel.prototype._eventTouch = function(event) {
    event.preventDefault();

    switch(event.type) {
        case 'pan':
        case 'panleft':
        case 'panright':
            // stick to the finger
            var paneOffset = -this.paneWidth * this.currentPane;
            var dragOffset = event.deltaX;

            // slow down at the first and last pane
            if((this.currentPane == 0 && event.direction == Hammer.DIRECTION_RIGHT) ||
                    (this.currentPane == this.paneCount - 1 && event.direction == Hammer.DIRECTION_LEFT)) {
                dragOffset *= .4;
            }

            this._setOffset(dragOffset + paneOffset, 0, false);
            break;

        case 'panend':
            // more then 50% moved, navigate
            if (Math.abs(event.deltaX) > this.paneWidth * .4) {
                if (event.direction == 'right') {
                    this._showPane(this.currentPane - 1, this._getRemainingDuration(event));
                } else {
                    this._showPane(this.currentPane + 1, this._getRemainingDuration(event));
                }
            } else {
                // bounce back
                this._showPane(this.currentPane);
            }
            break;

        case 'swipeleft':
            this._showPane(this.currentPane + 1, this._getRemainingDuration(event));
            break;

        case 'swiperight':
            this._showPane(this.currentPane - 1, this._getRemainingDuration(event));
            break;
    }
}

Carousel.prototype._eventNext = function(event) {
    this._showPane(this.currentPane + 1);
    this.direction = DIRECTION_FORWARD;
}

Carousel.prototype._eventResize = function(event) {
    this.paneWidth = parseInt(this.container.css('width'));
    this._showPane(this.currentPane, 0, false);
}

Carousel.prototype._eventPrev = function(event) {
    this._showPane(this.currentPane - 1);
    this.direction = DIRECTION_BACKWARD;
}

Carousel.prototype._getRemainingDuration = function(gesture) {
    return Math.abs(Math.min(
        options.transitionDuration,
        (this.paneWidth - gesture.distance) / gesture.velocityX
    ));
}

Carousel.prototype._listen = function() {
    if (this.paneCount <= 1) {
        return;
    }

    this.events.touch = this._eventTouch.bind(this);
    this.touchHandler.on(
        'pan panend swipeleft swiperight',
        this.events.touch
    );

    this.events.resize = this._eventResize.bind(this);
    bean.on(window, 'resize', this.events.resize);

    if (this.btnNext) {
        this.events.next = this._eventNext.bind(this);
        bean.on(this.btnNext[0], this.interaction, this.events.next);
    }

    if (this.btnPrev) {
        this.events.prev = this._eventPrev.bind(this);
        bean.on(this.btnPrev[0], this.interaction, this.events.prev);
    }
}

Carousel.prototype._setOffset = function(offset, duration, animate) {
    this.slider.removeClass('animate');

    if (true === animate) {
        this.slider.addClass('animate');
    }

    var styles = {};

    if (Modernizr.csstransforms3d) {
        styles = {
            'transform': 'translate3d(' + offset + 'px,0,0) scale3d(1,1,1)'
        }
    } else if (Modernizr.csstransforms) {
       styles = {
           'transform': 'translate(' + offset + 'px,0)'
       }
    } else {
       styles = {'left': offset + 'px'}
    }

    styles[Modernizr.prefixed('transition')] = duration + 'ms'
    this.slider.css(styles);
}

Carousel.prototype._showPane = function(pane, duration, animate) {
    var index = Math.max(0, Math.min(pane, this.paneCount - 1)),
        duration = 'undefined' !== typeof duration ? duration : options.transitionDuration,
        animate = 'undefined' !== typeof animate ? animate : true;

    this.currentPane = index;

    // out of bounds - use fixed duration for bounce back
    if (index !== pane) {
        duration = options.transitionDuration;
    }

    var offset = -(this.paneWidth * this.currentPane);
    this._setOffset(offset, duration, animate);

    this._updateUI();
}

Carousel.prototype._updateUI = function() {
    this.indicators[this.currentPane].addClass('indicator-current');

    if (this.indicators[this.currentPane - 1]) {
        this.indicators[this.currentPane - 1].removeClass('indicator-current');
    }

    if (this.indicators[this.currentPane + 1]) {
        this.indicators[this.currentPane + 1].removeClass('indicator-current');
    }
}

module.exports = Carousel;