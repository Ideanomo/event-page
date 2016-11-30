(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
; var __browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-csstransforms-csstransforms3d-csstransitions-touchevents-prefixed-prefixedcss-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,a;for(var f in C)if(C.hasOwnProperty(f)){if(e=[],n=C[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),y.push((o?"":"no-")+a.join("-"))}}function s(e){var n=S.className,t=Modernizr._config.classPrefix||"";if(w&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),w?S.className.baseVal=n:S.className=n)}function i(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function a(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function f(e,n){return!!~(""+e).indexOf(n)}function u(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):w?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e,n){return function(){return e.apply(n,arguments)}}function p(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?l(o,t||n):o);return!1}function d(){var e=n.body;return e||(e=u(w?"svg":"body"),e.fake=!0),e}function c(e,t,r,o){var s,i,a,f,l="modernizr",p=u("div"),c=d();if(parseInt(r,10))for(;r--;)a=u("div"),a.id=o?o[r]:l+(r+1),p.appendChild(a);return s=u("style"),s.type="text/css",s.id="s"+l,(c.fake?c:p).appendChild(s),c.appendChild(p),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),p.id=l,c.fake&&(c.style.background="",c.style.overflow="hidden",f=S.style.overflow,S.style.overflow="hidden",S.appendChild(c)),i=t(p,e),c.fake?(c.parentNode.removeChild(c),S.style.overflow=f,S.offsetHeight):p.parentNode.removeChild(p),!!i}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(a(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+a(n[o])+":"+r+")");return s=s.join(" or "),c("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function v(e,n,o,s){function a(){p&&(delete N.style,delete N.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var l=m(e,o);if(!r(l,"undefined"))return l}for(var p,d,c,v,h,g=["modernizr","tspan"];!N.style;)p=!0,N.modElem=u(g.shift()),N.style=N.modElem.style;for(c=e.length,d=0;c>d;d++)if(v=e[d],h=N.style[v],f(v,"-")&&(v=i(v)),N.style[v]!==t){if(s||r(o,"undefined"))return a(),"pfx"==n?v:!0;try{N.style[v]=o}catch(y){}if(N.style[v]!=h)return a(),"pfx"==n?v:!0}return a(),!1}function h(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+z.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?v(a,n,o,s):(a=(e+" "+E.join(i+" ")+i).split(" "),p(a,n,t))}function g(e,n,r){return h(e,t,t,n,r)}var y=[],C=[],x={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr;var S=n.documentElement,w="svg"===S.nodeName.toLowerCase(),_="CSS"in e&&"supports"in e.CSS,b="supportsCSS"in e;Modernizr.addTest("supports",_||b);var T="Moz O ms Webkit",z=x._config.usePrefixes?T.split(" "):[];x._cssomPrefixes=z;var P=function(n){var r,o=L.length,s=e.CSSRule;if("undefined"==typeof s)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in s)return"@"+n;for(var i=0;o>i;i++){var a=L[i],f=a.toUpperCase()+"_"+r;if(f in s)return"@-"+a.toLowerCase()+"-"+n}return!1};x.atRule=P;var E=x._config.usePrefixes?T.toLowerCase().split(" "):[];x._domPrefixes=E;var j=x.testStyles=c,k={elem:u("modernizr")};Modernizr._q.push(function(){delete k.elem});var N={style:k.elem.style};Modernizr._q.unshift(function(){delete N.style}),x.testAllProps=h;var A=x.prefixed=function(e,n,t){return 0===e.indexOf("@")?P(e):(-1!=e.indexOf("-")&&(e=i(e)),n?h(e,n,t):h(e,"pfx"))};x.prefixedCSS=function(e){var n=A(e);return n&&a(n)};x.testAllProps=g,Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&g("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!g("perspective","1px",!0),n=Modernizr._config.usePrefixes;if(e&&(!n||"webkitPerspective"in S.style)){var t,r="#modernizr{width:0;height:0}";Modernizr.supports?t="@supports (perspective: 1px)":(t="@media (transform-3d)",n&&(t+=",(-webkit-transform-3d)")),t+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",j(r+t,function(n){e=7===n.offsetWidth&&18===n.offsetHeight})}return e}),Modernizr.addTest("csstransitions",g("transition","all",!0));var L=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=L,Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var r=["@media (",L.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");j(r,function(e){t=9===e.offsetTop})}return t}),o(),s(y),delete x.addTest,delete x.addAsyncTest;for(var O=0;O<Modernizr._q.length;O++)Modernizr._q[O]();e.Modernizr=Modernizr}(window,document);
; browserify_shim__define__module__export__(typeof Modernizr != "undefined" ? Modernizr : window.Modernizr);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(require,module,exports){
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


},{"bean":"bean","bonzo":"bonzo","hammerjs":"hammerjs","qwery":"qwery"}],3:[function(require,module,exports){
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
},{"bean":"bean","bonzo":"bonzo","domready":"domready","hammerjs":"hammerjs","modernizr":1,"qwery":"qwery"}],4:[function(require,module,exports){

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

},{}],5:[function(require,module,exports){
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
},{"bonzo":"bonzo","domready":"domready","lib/ui/calendar":2,"lib/ui/carousel":3,"lib/ui/tabs":4,"qwery":"qwery"}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvbW9kZXJuaXpyLmpzIiwic3JjL2xpYi91aS9jYWxlbmRhci5qcyIsInNyYy9saWIvdWkvY2Fyb3VzZWwuanMiLCJzcmMvbGliL3VpL3RhYnMuanMiLCJzcmMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCI7IHZhciBfX2Jyb3dzZXJpZnlfc2hpbV9yZXF1aXJlX189cmVxdWlyZTsoZnVuY3Rpb24gYnJvd3NlcmlmeVNoaW0obW9kdWxlLCBleHBvcnRzLCByZXF1aXJlLCBkZWZpbmUsIGJyb3dzZXJpZnlfc2hpbV9fZGVmaW5lX19tb2R1bGVfX2V4cG9ydF9fKSB7XG4vKiEgbW9kZXJuaXpyIDMuMy4xIChDdXN0b20gQnVpbGQpIHwgTUlUICpcbiAqIGh0dHA6Ly9tb2Rlcm5penIuY29tL2Rvd25sb2FkLz8tY3NzdHJhbnNmb3Jtcy1jc3N0cmFuc2Zvcm1zM2QtY3NzdHJhbnNpdGlvbnMtdG91Y2hldmVudHMtcHJlZml4ZWQtcHJlZml4ZWRjc3Mtc2V0Y2xhc3NlcyAhKi9cbiFmdW5jdGlvbihlLG4sdCl7ZnVuY3Rpb24gcihlLG4pe3JldHVybiB0eXBlb2YgZT09PW59ZnVuY3Rpb24gbygpe3ZhciBlLG4sdCxvLHMsaSxhO2Zvcih2YXIgZiBpbiBDKWlmKEMuaGFzT3duUHJvcGVydHkoZikpe2lmKGU9W10sbj1DW2ZdLG4ubmFtZSYmKGUucHVzaChuLm5hbWUudG9Mb3dlckNhc2UoKSksbi5vcHRpb25zJiZuLm9wdGlvbnMuYWxpYXNlcyYmbi5vcHRpb25zLmFsaWFzZXMubGVuZ3RoKSlmb3IodD0wO3Q8bi5vcHRpb25zLmFsaWFzZXMubGVuZ3RoO3QrKyllLnB1c2gobi5vcHRpb25zLmFsaWFzZXNbdF0udG9Mb3dlckNhc2UoKSk7Zm9yKG89cihuLmZuLFwiZnVuY3Rpb25cIik/bi5mbigpOm4uZm4scz0wO3M8ZS5sZW5ndGg7cysrKWk9ZVtzXSxhPWkuc3BsaXQoXCIuXCIpLDE9PT1hLmxlbmd0aD9Nb2Rlcm5penJbYVswXV09bzooIU1vZGVybml6clthWzBdXXx8TW9kZXJuaXpyW2FbMF1daW5zdGFuY2VvZiBCb29sZWFufHwoTW9kZXJuaXpyW2FbMF1dPW5ldyBCb29sZWFuKE1vZGVybml6clthWzBdXSkpLE1vZGVybml6clthWzBdXVthWzFdXT1vKSx5LnB1c2goKG8/XCJcIjpcIm5vLVwiKSthLmpvaW4oXCItXCIpKX19ZnVuY3Rpb24gcyhlKXt2YXIgbj1TLmNsYXNzTmFtZSx0PU1vZGVybml6ci5fY29uZmlnLmNsYXNzUHJlZml4fHxcIlwiO2lmKHcmJihuPW4uYmFzZVZhbCksTW9kZXJuaXpyLl9jb25maWcuZW5hYmxlSlNDbGFzcyl7dmFyIHI9bmV3IFJlZ0V4cChcIihefFxcXFxzKVwiK3QrXCJuby1qcyhcXFxcc3wkKVwiKTtuPW4ucmVwbGFjZShyLFwiJDFcIit0K1wianMkMlwiKX1Nb2Rlcm5penIuX2NvbmZpZy5lbmFibGVDbGFzc2VzJiYobis9XCIgXCIrdCtlLmpvaW4oXCIgXCIrdCksdz9TLmNsYXNzTmFtZS5iYXNlVmFsPW46Uy5jbGFzc05hbWU9bil9ZnVuY3Rpb24gaShlKXtyZXR1cm4gZS5yZXBsYWNlKC8oW2Etel0pLShbYS16XSkvZyxmdW5jdGlvbihlLG4sdCl7cmV0dXJuIG4rdC50b1VwcGVyQ2FzZSgpfSkucmVwbGFjZSgvXi0vLFwiXCIpfWZ1bmN0aW9uIGEoZSl7cmV0dXJuIGUucmVwbGFjZSgvKFtBLVpdKS9nLGZ1bmN0aW9uKGUsbil7cmV0dXJuXCItXCIrbi50b0xvd2VyQ2FzZSgpfSkucmVwbGFjZSgvXm1zLS8sXCItbXMtXCIpfWZ1bmN0aW9uIGYoZSxuKXtyZXR1cm4hIX4oXCJcIitlKS5pbmRleE9mKG4pfWZ1bmN0aW9uIHUoKXtyZXR1cm5cImZ1bmN0aW9uXCIhPXR5cGVvZiBuLmNyZWF0ZUVsZW1lbnQ/bi5jcmVhdGVFbGVtZW50KGFyZ3VtZW50c1swXSk6dz9uLmNyZWF0ZUVsZW1lbnROUy5jYWxsKG4sXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGFyZ3VtZW50c1swXSk6bi5jcmVhdGVFbGVtZW50LmFwcGx5KG4sYXJndW1lbnRzKX1mdW5jdGlvbiBsKGUsbil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGUuYXBwbHkobixhcmd1bWVudHMpfX1mdW5jdGlvbiBwKGUsbix0KXt2YXIgbztmb3IodmFyIHMgaW4gZSlpZihlW3NdaW4gbilyZXR1cm4gdD09PSExP2Vbc106KG89bltlW3NdXSxyKG8sXCJmdW5jdGlvblwiKT9sKG8sdHx8bik6byk7cmV0dXJuITF9ZnVuY3Rpb24gZCgpe3ZhciBlPW4uYm9keTtyZXR1cm4gZXx8KGU9dSh3P1wic3ZnXCI6XCJib2R5XCIpLGUuZmFrZT0hMCksZX1mdW5jdGlvbiBjKGUsdCxyLG8pe3ZhciBzLGksYSxmLGw9XCJtb2Rlcm5penJcIixwPXUoXCJkaXZcIiksYz1kKCk7aWYocGFyc2VJbnQociwxMCkpZm9yKDtyLS07KWE9dShcImRpdlwiKSxhLmlkPW8/b1tyXTpsKyhyKzEpLHAuYXBwZW5kQ2hpbGQoYSk7cmV0dXJuIHM9dShcInN0eWxlXCIpLHMudHlwZT1cInRleHQvY3NzXCIscy5pZD1cInNcIitsLChjLmZha2U/YzpwKS5hcHBlbmRDaGlsZChzKSxjLmFwcGVuZENoaWxkKHApLHMuc3R5bGVTaGVldD9zLnN0eWxlU2hlZXQuY3NzVGV4dD1lOnMuYXBwZW5kQ2hpbGQobi5jcmVhdGVUZXh0Tm9kZShlKSkscC5pZD1sLGMuZmFrZSYmKGMuc3R5bGUuYmFja2dyb3VuZD1cIlwiLGMuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIixmPVMuc3R5bGUub3ZlcmZsb3csUy5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiLFMuYXBwZW5kQ2hpbGQoYykpLGk9dChwLGUpLGMuZmFrZT8oYy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGMpLFMuc3R5bGUub3ZlcmZsb3c9ZixTLm9mZnNldEhlaWdodCk6cC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHApLCEhaX1mdW5jdGlvbiBtKG4scil7dmFyIG89bi5sZW5ndGg7aWYoXCJDU1NcImluIGUmJlwic3VwcG9ydHNcImluIGUuQ1NTKXtmb3IoO28tLTspaWYoZS5DU1Muc3VwcG9ydHMoYShuW29dKSxyKSlyZXR1cm4hMDtyZXR1cm4hMX1pZihcIkNTU1N1cHBvcnRzUnVsZVwiaW4gZSl7Zm9yKHZhciBzPVtdO28tLTspcy5wdXNoKFwiKFwiK2EobltvXSkrXCI6XCIrcitcIilcIik7cmV0dXJuIHM9cy5qb2luKFwiIG9yIFwiKSxjKFwiQHN1cHBvcnRzIChcIitzK1wiKSB7ICNtb2Rlcm5penIgeyBwb3NpdGlvbjogYWJzb2x1dGU7IH0gfVwiLGZ1bmN0aW9uKGUpe3JldHVyblwiYWJzb2x1dGVcIj09Z2V0Q29tcHV0ZWRTdHlsZShlLG51bGwpLnBvc2l0aW9ufSl9cmV0dXJuIHR9ZnVuY3Rpb24gdihlLG4sbyxzKXtmdW5jdGlvbiBhKCl7cCYmKGRlbGV0ZSBOLnN0eWxlLGRlbGV0ZSBOLm1vZEVsZW0pfWlmKHM9cihzLFwidW5kZWZpbmVkXCIpPyExOnMsIXIobyxcInVuZGVmaW5lZFwiKSl7dmFyIGw9bShlLG8pO2lmKCFyKGwsXCJ1bmRlZmluZWRcIikpcmV0dXJuIGx9Zm9yKHZhciBwLGQsYyx2LGgsZz1bXCJtb2Rlcm5penJcIixcInRzcGFuXCJdOyFOLnN0eWxlOylwPSEwLE4ubW9kRWxlbT11KGcuc2hpZnQoKSksTi5zdHlsZT1OLm1vZEVsZW0uc3R5bGU7Zm9yKGM9ZS5sZW5ndGgsZD0wO2M+ZDtkKyspaWYodj1lW2RdLGg9Ti5zdHlsZVt2XSxmKHYsXCItXCIpJiYodj1pKHYpKSxOLnN0eWxlW3ZdIT09dCl7aWYoc3x8cihvLFwidW5kZWZpbmVkXCIpKXJldHVybiBhKCksXCJwZnhcIj09bj92OiEwO3RyeXtOLnN0eWxlW3ZdPW99Y2F0Y2goeSl7fWlmKE4uc3R5bGVbdl0hPWgpcmV0dXJuIGEoKSxcInBmeFwiPT1uP3Y6ITB9cmV0dXJuIGEoKSwhMX1mdW5jdGlvbiBoKGUsbix0LG8scyl7dmFyIGk9ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStlLnNsaWNlKDEpLGE9KGUrXCIgXCIrei5qb2luKGkrXCIgXCIpK2kpLnNwbGl0KFwiIFwiKTtyZXR1cm4gcihuLFwic3RyaW5nXCIpfHxyKG4sXCJ1bmRlZmluZWRcIik/dihhLG4sbyxzKTooYT0oZStcIiBcIitFLmpvaW4oaStcIiBcIikraSkuc3BsaXQoXCIgXCIpLHAoYSxuLHQpKX1mdW5jdGlvbiBnKGUsbixyKXtyZXR1cm4gaChlLHQsdCxuLHIpfXZhciB5PVtdLEM9W10seD17X3ZlcnNpb246XCIzLjMuMVwiLF9jb25maWc6e2NsYXNzUHJlZml4OlwiXCIsZW5hYmxlQ2xhc3NlczohMCxlbmFibGVKU0NsYXNzOiEwLHVzZVByZWZpeGVzOiEwfSxfcTpbXSxvbjpmdW5jdGlvbihlLG4pe3ZhciB0PXRoaXM7c2V0VGltZW91dChmdW5jdGlvbigpe24odFtlXSl9LDApfSxhZGRUZXN0OmZ1bmN0aW9uKGUsbix0KXtDLnB1c2goe25hbWU6ZSxmbjpuLG9wdGlvbnM6dH0pfSxhZGRBc3luY1Rlc3Q6ZnVuY3Rpb24oZSl7Qy5wdXNoKHtuYW1lOm51bGwsZm46ZX0pfX0sTW9kZXJuaXpyPWZ1bmN0aW9uKCl7fTtNb2Rlcm5penIucHJvdG90eXBlPXgsTW9kZXJuaXpyPW5ldyBNb2Rlcm5penI7dmFyIFM9bi5kb2N1bWVudEVsZW1lbnQsdz1cInN2Z1wiPT09Uy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLF89XCJDU1NcImluIGUmJlwic3VwcG9ydHNcImluIGUuQ1NTLGI9XCJzdXBwb3J0c0NTU1wiaW4gZTtNb2Rlcm5penIuYWRkVGVzdChcInN1cHBvcnRzXCIsX3x8Yik7dmFyIFQ9XCJNb3ogTyBtcyBXZWJraXRcIix6PXguX2NvbmZpZy51c2VQcmVmaXhlcz9ULnNwbGl0KFwiIFwiKTpbXTt4Ll9jc3NvbVByZWZpeGVzPXo7dmFyIFA9ZnVuY3Rpb24obil7dmFyIHIsbz1MLmxlbmd0aCxzPWUuQ1NTUnVsZTtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgcylyZXR1cm4gdDtpZighbilyZXR1cm4hMTtpZihuPW4ucmVwbGFjZSgvXkAvLFwiXCIpLHI9bi5yZXBsYWNlKC8tL2csXCJfXCIpLnRvVXBwZXJDYXNlKCkrXCJfUlVMRVwiLHIgaW4gcylyZXR1cm5cIkBcIituO2Zvcih2YXIgaT0wO28+aTtpKyspe3ZhciBhPUxbaV0sZj1hLnRvVXBwZXJDYXNlKCkrXCJfXCIrcjtpZihmIGluIHMpcmV0dXJuXCJALVwiK2EudG9Mb3dlckNhc2UoKStcIi1cIitufXJldHVybiExfTt4LmF0UnVsZT1QO3ZhciBFPXguX2NvbmZpZy51c2VQcmVmaXhlcz9ULnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpOltdO3guX2RvbVByZWZpeGVzPUU7dmFyIGo9eC50ZXN0U3R5bGVzPWMsaz17ZWxlbTp1KFwibW9kZXJuaXpyXCIpfTtNb2Rlcm5penIuX3EucHVzaChmdW5jdGlvbigpe2RlbGV0ZSBrLmVsZW19KTt2YXIgTj17c3R5bGU6ay5lbGVtLnN0eWxlfTtNb2Rlcm5penIuX3EudW5zaGlmdChmdW5jdGlvbigpe2RlbGV0ZSBOLnN0eWxlfSkseC50ZXN0QWxsUHJvcHM9aDt2YXIgQT14LnByZWZpeGVkPWZ1bmN0aW9uKGUsbix0KXtyZXR1cm4gMD09PWUuaW5kZXhPZihcIkBcIik/UChlKTooLTEhPWUuaW5kZXhPZihcIi1cIikmJihlPWkoZSkpLG4/aChlLG4sdCk6aChlLFwicGZ4XCIpKX07eC5wcmVmaXhlZENTUz1mdW5jdGlvbihlKXt2YXIgbj1BKGUpO3JldHVybiBuJiZhKG4pfTt4LnRlc3RBbGxQcm9wcz1nLE1vZGVybml6ci5hZGRUZXN0KFwiY3NzdHJhbnNmb3Jtc1wiLGZ1bmN0aW9uKCl7cmV0dXJuLTE9PT1uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJBbmRyb2lkIDIuXCIpJiZnKFwidHJhbnNmb3JtXCIsXCJzY2FsZSgxKVwiLCEwKX0pLE1vZGVybml6ci5hZGRUZXN0KFwiY3NzdHJhbnNmb3JtczNkXCIsZnVuY3Rpb24oKXt2YXIgZT0hIWcoXCJwZXJzcGVjdGl2ZVwiLFwiMXB4XCIsITApLG49TW9kZXJuaXpyLl9jb25maWcudXNlUHJlZml4ZXM7aWYoZSYmKCFufHxcIndlYmtpdFBlcnNwZWN0aXZlXCJpbiBTLnN0eWxlKSl7dmFyIHQscj1cIiNtb2Rlcm5penJ7d2lkdGg6MDtoZWlnaHQ6MH1cIjtNb2Rlcm5penIuc3VwcG9ydHM/dD1cIkBzdXBwb3J0cyAocGVyc3BlY3RpdmU6IDFweClcIjoodD1cIkBtZWRpYSAodHJhbnNmb3JtLTNkKVwiLG4mJih0Kz1cIiwoLXdlYmtpdC10cmFuc2Zvcm0tM2QpXCIpKSx0Kz1cInsjbW9kZXJuaXpye3dpZHRoOjdweDtoZWlnaHQ6MThweDttYXJnaW46MDtwYWRkaW5nOjA7Ym9yZGVyOjB9fVwiLGoocit0LGZ1bmN0aW9uKG4pe2U9Nz09PW4ub2Zmc2V0V2lkdGgmJjE4PT09bi5vZmZzZXRIZWlnaHR9KX1yZXR1cm4gZX0pLE1vZGVybml6ci5hZGRUZXN0KFwiY3NzdHJhbnNpdGlvbnNcIixnKFwidHJhbnNpdGlvblwiLFwiYWxsXCIsITApKTt2YXIgTD14Ll9jb25maWcudXNlUHJlZml4ZXM/XCIgLXdlYmtpdC0gLW1vei0gLW8tIC1tcy0gXCIuc3BsaXQoXCIgXCIpOltcIlwiLFwiXCJdO3guX3ByZWZpeGVzPUwsTW9kZXJuaXpyLmFkZFRlc3QoXCJ0b3VjaGV2ZW50c1wiLGZ1bmN0aW9uKCl7dmFyIHQ7aWYoXCJvbnRvdWNoc3RhcnRcImluIGV8fGUuRG9jdW1lbnRUb3VjaCYmbiBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2gpdD0hMDtlbHNle3ZhciByPVtcIkBtZWRpYSAoXCIsTC5qb2luKFwidG91Y2gtZW5hYmxlZCksKFwiKSxcImhlYXJ0elwiLFwiKVwiLFwieyNtb2Rlcm5penJ7dG9wOjlweDtwb3NpdGlvbjphYnNvbHV0ZX19XCJdLmpvaW4oXCJcIik7aihyLGZ1bmN0aW9uKGUpe3Q9OT09PWUub2Zmc2V0VG9wfSl9cmV0dXJuIHR9KSxvKCkscyh5KSxkZWxldGUgeC5hZGRUZXN0LGRlbGV0ZSB4LmFkZEFzeW5jVGVzdDtmb3IodmFyIE89MDtPPE1vZGVybml6ci5fcS5sZW5ndGg7TysrKU1vZGVybml6ci5fcVtPXSgpO2UuTW9kZXJuaXpyPU1vZGVybml6cn0od2luZG93LGRvY3VtZW50KTtcbjsgYnJvd3NlcmlmeV9zaGltX19kZWZpbmVfX21vZHVsZV9fZXhwb3J0X18odHlwZW9mIE1vZGVybml6ciAhPSBcInVuZGVmaW5lZFwiID8gTW9kZXJuaXpyIDogd2luZG93Lk1vZGVybml6cik7XG5cbn0pLmNhbGwoZ2xvYmFsLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGZ1bmN0aW9uIGRlZmluZUV4cG9ydChleCkgeyBtb2R1bGUuZXhwb3J0cyA9IGV4OyB9KTtcbiIsInZhciBiZWFuID0gcmVxdWlyZSgnYmVhbicpO1xudmFyIGJvbnpvID0gcmVxdWlyZSgnYm9uem8nKTtcbnZhciBxd2VyeSA9IHJlcXVpcmUoJ3F3ZXJ5Jyk7XG52YXIgSGFtbWVyID0gcmVxdWlyZSgnaGFtbWVyanMnKTtcblxudmFyIG9wdGlvbnMgPVxue1xuICAgIGluZm9TZWxlY3RvcjogJy5zaG93LWluZm8nLFxuICAgIGluZm9TZWxlY3Rvckxpc3Q6ICdjYWxlbmRhci1kYXktbGlzdCcsXG4gICAgaW5mb092ZXJsYXlTZWxlY3RvcjogJy5vdmVybGF5LXdyYXBwZXInLFxuICAgIGluZm9PdmVybGF5VG9nZ2xlQ2xhc3M6ICdvdmVybGF5LXdyYXBwZXItaGlkZScsXG4gICAgbXVsdGlwbGVFdmVudFNlbGVjdG9yOiAnLm11bHRpcGxlLWV2ZW50LWluZGljYXRvcicsXG4gICAgdG9nZ2xlU3dpdGNoOiAnLnN3aXRjaCBpbnB1dCcsXG4gICAgY2FsZW5kYXJHcmlkOiAnY2FsZW5kYXItZ3JpZCcsXG4gICAgY2lyY2xlRXZlbnQ6ICcuY2lyY2xlJyxcbiAgICBsaXN0RGF5RXZlbnQ6ICdkYXktbGlzdCcsXG4gICAgbGlzdERheUV2ZW50Q2xhc3M6ICcuZGF5LWxpc3QnLFxuICAgIGxpc3REYXlFdmVudFRvZ2dsZUNsYXNzOiAnZGF5LWxpc3QtaGlkZScsXG4gICAgY3VycmVudE1vbnRoOiAnY3VycmVudC1tb250aCcsXG4gICAgbmV4dE1vbnRoOiAnLm5leHQnLFxuICAgIHByZXZNb250aDogJy5wcmV2J1xufTtcblxuZnVuY3Rpb24gQ2FsZW5kYXIoY29udGFpbmVyKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBib256byhjb250YWluZXIpO1xuXG4gICAgdGhpcy5pc1RvdWNoRW5hYmxlZCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdztcbiAgICB0aGlzLmludGVyYWN0aW9uRXZlbnQgPSAnY2xpY2snO1xuXG4vL0luaXRpYWxpemUgc3RhcnRpbmcgdmFsdWUgZm9yIG1vbnRoXG4gICAgdGhpcy5tb250aCA9IDI7XG5cbiAgICB0aGlzLl9idWlsZCgpO1xuICAgIHRoaXMuX2xpc3RlbigpO1xufVxuXG5DYWxlbmRhci5wcm90b3R5cGUuX2J1aWxkID0gZnVuY3Rpb24gKCkge1xuLy9ub3RoaW5nIGhlcmVcbn07XG5cbkNhbGVuZGFyLnByb3RvdHlwZS5fbGlzdGVuID0gZnVuY3Rpb24gKCkge1xuICAgIGJlYW4ub24odGhpcy5jb250YWluZXJbMF0sIHRoaXMuaW50ZXJhY3Rpb25FdmVudCwgb3B0aW9ucy5pbmZvU2VsZWN0b3IsIHRoaXMub25JbmZvQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgYmVhbi5vbih0aGlzLmNvbnRhaW5lclswXSwgdGhpcy5pbnRlcmFjdGlvbkV2ZW50LCBvcHRpb25zLm11bHRpcGxlRXZlbnRTZWxlY3RvciwgdGhpcy5vbk11bHRpcGxlRXZlbnRDbGljay5iaW5kKHRoaXMpKTtcbiAgICBiZWFuLm9uKHRoaXMuY29udGFpbmVyWzBdLCB0aGlzLmludGVyYWN0aW9uRXZlbnQsIG9wdGlvbnMudG9nZ2xlU3dpdGNoLCB0aGlzLm9uVG9nZ2xlU3dpdGNoQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgYmVhbi5vbih0aGlzLmNvbnRhaW5lclswXSwgdGhpcy5pbnRlcmFjdGlvbkV2ZW50LCBvcHRpb25zLmNpcmNsZUV2ZW50LCB0aGlzLm9uQ2lyY2xlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgYmVhbi5vbih0aGlzLmNvbnRhaW5lclswXSwgdGhpcy5pbnRlcmFjdGlvbkV2ZW50LCBvcHRpb25zLnByZXZNb250aCwgdGhpcy5vblByZXZDbGljay5iaW5kKHRoaXMpKTtcbiAgICBiZWFuLm9uKHRoaXMuY29udGFpbmVyWzBdLCB0aGlzLmludGVyYWN0aW9uRXZlbnQsIG9wdGlvbnMubmV4dE1vbnRoLCB0aGlzLm9uTmV4dENsaWNrLmJpbmQodGhpcykpO1xuXG4gICAgYmVhbi5vbih0aGlzLmNvbnRhaW5lclswXSwgdGhpcy5pbnRlcmFjdGlvbkV2ZW50LCBvcHRpb25zLmxpc3REYXlFdmVudENsYXNzLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG59O1xuXG5DYWxlbmRhci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIGN1cnJlbnRNb250aCA9IGJvbnpvKHF3ZXJ5KCcjY3VycmVudC1tb250aCcpKTtcblxuICAgIC8vU2hvdyBtb250aFxuICAgIHZhciBlbCA9IGJvbnpvKHF3ZXJ5KCcjJyArIHRoaXMuaWQpKTtcbiAgICBlbC5zaG93KCdibG9jaycpO1xuXG4gICAgLy9VcGRhdGUgbW9udGhcbiAgICBpZiAodGhpcy5tb250aCA9PT0gMykge1xuICAgICAgICBjdXJyZW50TW9udGguaHRtbCgnQXByaWwgMjAxNicpO1xuICAgICAgICAvL0hpZGUgb3RoZXIgbW9udGhzIGlmIHNob3dpbmdcbiAgICAgICAgdmFyIGhpZGVNb250aCA9IGJvbnpvKHF3ZXJ5KCcjZGVmYXVsdCwgI3ByZXYnKSk7XG4gICAgICAgIGhpZGVNb250aC5oaWRlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vbnRoID09PSAyKSB7XG4gICAgICAgIGN1cnJlbnRNb250aC5odG1sKCdNYXJjaCAyMDE2Jyk7XG4gICAgICAgIC8vSGlkZSBvdGhlciBtb250aHMgaWYgc2hvd2luZ1xuICAgICAgICB2YXIgaGlkZU1vbnRoID0gYm9uem8ocXdlcnkoJyNuZXh0LCAjcHJldicpKTtcbiAgICAgICAgaGlkZU1vbnRoLmhpZGUoKTtcbiAgICAgICAgdmFyIGVsID0gYm9uem8ocXdlcnkoJyNkZWZhdWx0JykpOyAvLyBJbml0aWFsaXplIG5ldyBsb2NhbCB2YXJpYWJsZSBlbCBmb3IgRE9NIHF1ZXJ5IGFzIGdsb2JhbCBlbCBwb2ludHMgdG8gY3VycmVudFRhcmdldFxuICAgICAgICBlbC5zaG93KCdibG9jaycpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tb250aCA9PT0gMSkge1xuICAgICAgICBjdXJyZW50TW9udGguaHRtbCgnRmViIDIwMTYnKTtcbiAgICAgICAgLy9IaWRlIG90aGVyIG1vbnRocyBpZiBzaG93aW5nXG4gICAgICAgIHZhciBoaWRlTW9udGggPSBib256byhxd2VyeSgnI2RlZmF1bHQsICNuZXh0JykpO1xuICAgICAgICBoaWRlTW9udGguaGlkZSgpO1xuICAgIH1cbn07XG5cbi8vQ2xpY2sgb24gTkVYVFxuQ2FsZW5kYXIucHJvdG90eXBlLm9uTmV4dENsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHRoaXMubW9udGgrKztcbiAgICBjb25zb2xlLmxvZyh0aGlzLm1vbnRoKTtcbiAgICB0aGlzLmlkID0gYm9uem8oZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnbW9udGgnKTtcbiAgICB0aGlzLnJlbmRlcigpO1xufTtcblxuLy9DbGljayBvbiBQUkVWXG5DYWxlbmRhci5wcm90b3R5cGUub25QcmV2Q2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgdGhpcy5tb250aC0tO1xuICAgIGNvbnNvbGUubG9nKHRoaXMubW9udGgpO1xuICAgIHRoaXMuaWQgPSBib256byhldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdtb250aCcpO1xuICAgIHRoaXMucmVuZGVyKCk7XG59O1xuXG5DYWxlbmRhci5wcm90b3R5cGUuaW5mb092ZXJsYXlIaWRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIHRoaXMuaW5mb092ZXJsYXlTaG93aW5nLmFkZENsYXNzKG9wdGlvbnMuaW5mb092ZXJsYXlUb2dnbGVDbGFzcyk7XG4gICAgdGhpcy5pbmZvT3ZlcmxheVNob3dpbmcgPSBudWxsO1xufTtcblxuQ2FsZW5kYXIucHJvdG90eXBlLm9uSW5mb0NsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmICh0aGlzLmluZm9PdmVybGF5U2hvd2luZykge1xuICAgICAgICB0aGlzLmluZm9PdmVybGF5SGlkZSgpO1xuICAgIH1cblxuICAgIHZhciBvdmVybGF5ID0gYm9uem8ocXdlcnkob3B0aW9ucy5pbmZvT3ZlcmxheVNlbGVjdG9yLCBldmVudC5jdXJyZW50VGFyZ2V0KSk7XG5cbiAgICBvdmVybGF5LnRvZ2dsZUNsYXNzKG9wdGlvbnMuaW5mb092ZXJsYXlUb2dnbGVDbGFzcyk7XG5cbiAgICB0aGlzLmluZm9PdmVybGF5U2hvd2luZyA9IG92ZXJsYXk7XG4gICAgYmVhbi5vbmUoZG9jdW1lbnQuYm9keSwgJ2NsaWNrJywgdGhpcy5pbmZvT3ZlcmxheUhpZGUuYmluZCh0aGlzKSk7XG59O1xuXG5DYWxlbmRhci5wcm90b3R5cGUub25NdWx0aXBsZUV2ZW50Q2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnNvbGUubG9nKCdtdWx0aXBsZSBldmVudCBpbmRpY2F0b3IhJyk7XG59O1xuXG5DYWxlbmRhci5wcm90b3R5cGUub25Ub2dnbGVTd2l0Y2hDbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnNvbGUubG9nKCdUb2dnbGUgdmlldyBzd2l0Y2ghJyk7XG5cbiAgICB0aGlzLmNvbnRhaW5lci50b2dnbGVDbGFzcyhvcHRpb25zLmNhbGVuZGFyR3JpZCk7XG59O1xuXG5DYWxlbmRhci5wcm90b3R5cGUub25DaXJjbGVDbGlja091dHNpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuY2lyY2xlU2hvd2luZykge1xuICAgICAgICB0aGlzLmNpcmNsZVNob3dpbmcudG9nZ2xlQ2xhc3Mob3B0aW9ucy5saXN0RGF5RXZlbnQpOyAgLy9BZGRzIHRoZSBjbGFzcyB0byBzaG93XG4gICAgICAgIHRoaXMuY2lyY2xlU2hvd2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vRXZlbnQuc2hvdygpO1xuICAgIH1cbn07XG5cbkNhbGVuZGFyLnByb3RvdHlwZS5vbkNpcmNsZUNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIC8vIEhpZGUgcGxhY2Vob2xkZXIgdGV4dCBmb3IgJ25vIGV2ZW50J1xuICAgIHRoaXMubm9FdmVudCA9IGJvbnpvKHF3ZXJ5KCcjbm8tZXZlbnQnKSk7XG4gICAgdGhpcy5ub0V2ZW50LmhpZGUoKTtcblxuICAgIGlmICh0aGlzLmNpcmNsZVNob3dpbmcpIHtcbiAgICAgICAgdGhpcy5jaXJjbGVTaG93aW5nLmhpZGUoKTtcbiAgICAgICAgdGhpcy5ub0V2ZW50LnNob3coKTtcbiAgICB9XG5cbiAgICB2YXIgaWQgPSBib256byhldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdtb24nKTtcbiAgICB2YXIgZWwgPSBib256byhxd2VyeSgnIycgKyBpZCkpO1xuICAgIGVsLnRvZ2dsZUNsYXNzKG9wdGlvbnMubGlzdERheUV2ZW50KTtcblxuICAgIHRoaXMuY2lyY2xlU2hvd2luZyA9IGVsO1xuXG4gICAgYmVhbi5vbmUoZG9jdW1lbnQuYm9keSwgdGhpcy5pbnRlcmFjdGlvbkV2ZW50LCB0aGlzLm9uQ2lyY2xlQ2xpY2tPdXRzaWRlLmJpbmQodGhpcykpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYWxlbmRhcjtcblxuIiwidmFyIGJlYW4gPSByZXF1aXJlKCdiZWFuJyk7XG52YXIgYm9uem8gPSByZXF1aXJlKCdib256bycpO1xudmFyIGRvbXJlYWR5ID0gcmVxdWlyZSgnZG9tcmVhZHknKTtcbnZhciBIYW1tZXIgPSByZXF1aXJlKCdoYW1tZXJqcycpO1xudmFyIE1vZGVybml6ciA9IHJlcXVpcmUoJ21vZGVybml6cicpO1xudmFyIHF3ZXJ5ID0gcmVxdWlyZSgncXdlcnknKTtcblxudmFyIG9wdGlvbnMgPSB7XG4gICAgY2Fyb3VzZWxTZWxlY3RvcjogJy5jYXJvdXNlbCcsXG4gICAgcGFuZVNlbGVjdG9yOiAnbGknLFxuICAgIHNsaWRlclNlbGVjdG9yOiAnLmNhcm91c2VsX193cmFwcGVyJyxcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246ICczMDAnLFxuICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogJ2Vhc2UtaW4tb3V0JyxcbiAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25Ub3VjaDogJ2Vhc2Utb3V0J1xufTtcblxudmFyIERJUkVDVElPTl9CQUNLV0FSRCA9IDEsXG4gICAgRElSRUNUSU9OX0ZPUldBUkQgPSAyO1xuXG5mdW5jdGlvbiBDYXJvdXNlbChjb250YWluZXIpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGJvbnpvKHF3ZXJ5KGNvbnRhaW5lcikpO1xuICAgIHRoaXMuc2xpZGVyID0gYm9uem8ocXdlcnkob3B0aW9ucy5zbGlkZXJTZWxlY3RvciwgdGhpcy5jb250YWluZXIpKTtcbiAgICB0aGlzLnBhbmVzID0gYm9uem8ocXdlcnkob3B0aW9ucy5wYW5lU2VsZWN0b3IsIHRoaXMuc2xpZGVyKSk7XG5cbiAgICAvLyBzZXQgdXAgcHJvcGVydGllc1xuICAgIHRoaXMuZGlyZWN0aW9uID0gRElSRUNUSU9OX0ZPUldBUkQ7XG4gICAgdGhpcy5pbnRlcmFjdGlvbiA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyA/ICd0b3VjaHN0YXJ0JyA6ICdjbGljayc7XG4gICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgICB0aGlzLmluZGljYXRvcnMgPSBbXTtcbiAgICB0aGlzLmN1cnJlbnRQYW5lID0gMDtcblxuICAgIC8vIGJ1aWxkIGFuZCBsaXN0ZW5cbiAgICB0aGlzLl9idWlsZCgpO1xuICAgIHRoaXMuX2xpc3RlbigpO1xufVxuXG5DYXJvdXNlbC5wcm90b3R5cGUuX2FkZEluZGljYXRvciA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICB2YXIgaW5kaWNhdG9yID0gYm9uem8oYm9uem8uY3JlYXRlKCc8c3Bhbj4nKSkuYWRkQ2xhc3MoJ2luZGljYXRvcicpO1xuICAgIHRoaXMuaW5kaWNhdG9ycy5wdXNoKGluZGljYXRvcik7XG4gICAgdGhpcy5pbmRpY2F0b3JDb250YWluZXIuYXBwZW5kKGluZGljYXRvcik7XG59XG5cbkNhcm91c2VsLnByb3RvdHlwZS5fYnVpbGQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRvdWNoSGFuZGxlciA9IG5ldyBIYW1tZXIodGhpcy5zbGlkZXJbMF0sIHtcbiAgICAgICAgZHJhZ19sb2NrX3RvX2F4aXM6IHRydWVcbiAgICB9KTtcblxuICAgIC8vIGNvdW50IHBhbmVzXG4gICAgdGhpcy5wYW5lQ291bnQgPSB0aGlzLnBhbmVzLmxlbmd0aDtcblxuICAgIC8vIGdldCB3aWR0aCBvZiBwYW5lc1xuICAgIHRoaXMucGFuZVdpZHRoID0gcGFyc2VJbnQodGhpcy5jb250YWluZXIuY3NzKCd3aWR0aCcpKTtcblxuICAgIC8vIGNhcHR1cmUgdWkgY29udHJvbHNcbiAgICB0aGlzLmJ0bk5leHQgPSBib256byhxd2VyeSgnLm5leHQnLCB0aGlzLmNvbnRhaW5lcikpO1xuICAgIHRoaXMuYnRuUHJldiA9IGJvbnpvKHF3ZXJ5KCcucHJldicsIHRoaXMuY29udGFpbmVyKSk7XG5cbiAgICB0aGlzLmluZGljYXRvckNvbnRhaW5lciA9IGJvbnpvKHF3ZXJ5KCcuaW5kaWNhdG9yLWNvbnRhaW5lcicsIHRoaXMuY29udGFpbmVyKSk7XG5cbiAgICBpZiAodGhpcy5wYW5lQ291bnQgPiAxKSB7ICAgIFxuICAgICAgICAvLyBjcmVhdGUgaW5kaWNhdG9yc1xuICAgICAgICB0aGlzLnBhbmVzLmVhY2godGhpcy5fYWRkSW5kaWNhdG9yLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLl91cGRhdGVVSSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYnRuTmV4dC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICB0aGlzLmJ0blByZXYuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgdGhpcy5pbmRpY2F0b3JDb250YWluZXIuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICB9XG59XG5cbkNhcm91c2VsLnByb3RvdHlwZS5fZXZlbnRUb3VjaCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHN3aXRjaChldmVudC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3Bhbic6XG4gICAgICAgIGNhc2UgJ3BhbmxlZnQnOlxuICAgICAgICBjYXNlICdwYW5yaWdodCc6XG4gICAgICAgICAgICAvLyBzdGljayB0byB0aGUgZmluZ2VyXG4gICAgICAgICAgICB2YXIgcGFuZU9mZnNldCA9IC10aGlzLnBhbmVXaWR0aCAqIHRoaXMuY3VycmVudFBhbmU7XG4gICAgICAgICAgICB2YXIgZHJhZ09mZnNldCA9IGV2ZW50LmRlbHRhWDtcblxuICAgICAgICAgICAgLy8gc2xvdyBkb3duIGF0IHRoZSBmaXJzdCBhbmQgbGFzdCBwYW5lXG4gICAgICAgICAgICBpZigodGhpcy5jdXJyZW50UGFuZSA9PSAwICYmIGV2ZW50LmRpcmVjdGlvbiA9PSBIYW1tZXIuRElSRUNUSU9OX1JJR0hUKSB8fFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5jdXJyZW50UGFuZSA9PSB0aGlzLnBhbmVDb3VudCAtIDEgJiYgZXZlbnQuZGlyZWN0aW9uID09IEhhbW1lci5ESVJFQ1RJT05fTEVGVCkpIHtcbiAgICAgICAgICAgICAgICBkcmFnT2Zmc2V0ICo9IC40O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9zZXRPZmZzZXQoZHJhZ09mZnNldCArIHBhbmVPZmZzZXQsIDAsIGZhbHNlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3BhbmVuZCc6XG4gICAgICAgICAgICAvLyBtb3JlIHRoZW4gNTAlIG1vdmVkLCBuYXZpZ2F0ZVxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGV2ZW50LmRlbHRhWCkgPiB0aGlzLnBhbmVXaWR0aCAqIC40KSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRpcmVjdGlvbiA9PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dQYW5lKHRoaXMuY3VycmVudFBhbmUgLSAxLCB0aGlzLl9nZXRSZW1haW5pbmdEdXJhdGlvbihldmVudCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dQYW5lKHRoaXMuY3VycmVudFBhbmUgKyAxLCB0aGlzLl9nZXRSZW1haW5pbmdEdXJhdGlvbihldmVudCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gYm91bmNlIGJhY2tcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93UGFuZSh0aGlzLmN1cnJlbnRQYW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3N3aXBlbGVmdCc6XG4gICAgICAgICAgICB0aGlzLl9zaG93UGFuZSh0aGlzLmN1cnJlbnRQYW5lICsgMSwgdGhpcy5fZ2V0UmVtYWluaW5nRHVyYXRpb24oZXZlbnQpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3N3aXBlcmlnaHQnOlxuICAgICAgICAgICAgdGhpcy5fc2hvd1BhbmUodGhpcy5jdXJyZW50UGFuZSAtIDEsIHRoaXMuX2dldFJlbWFpbmluZ0R1cmF0aW9uKGV2ZW50KSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbkNhcm91c2VsLnByb3RvdHlwZS5fZXZlbnROZXh0ID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLl9zaG93UGFuZSh0aGlzLmN1cnJlbnRQYW5lICsgMSk7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBESVJFQ1RJT05fRk9SV0FSRDtcbn1cblxuQ2Fyb3VzZWwucHJvdG90eXBlLl9ldmVudFJlc2l6ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5wYW5lV2lkdGggPSBwYXJzZUludCh0aGlzLmNvbnRhaW5lci5jc3MoJ3dpZHRoJykpO1xuICAgIHRoaXMuX3Nob3dQYW5lKHRoaXMuY3VycmVudFBhbmUsIDAsIGZhbHNlKTtcbn1cblxuQ2Fyb3VzZWwucHJvdG90eXBlLl9ldmVudFByZXYgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMuX3Nob3dQYW5lKHRoaXMuY3VycmVudFBhbmUgLSAxKTtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IERJUkVDVElPTl9CQUNLV0FSRDtcbn1cblxuQ2Fyb3VzZWwucHJvdG90eXBlLl9nZXRSZW1haW5pbmdEdXJhdGlvbiA9IGZ1bmN0aW9uKGdlc3R1cmUpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMoTWF0aC5taW4oXG4gICAgICAgIG9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgICAodGhpcy5wYW5lV2lkdGggLSBnZXN0dXJlLmRpc3RhbmNlKSAvIGdlc3R1cmUudmVsb2NpdHlYXG4gICAgKSk7XG59XG5cbkNhcm91c2VsLnByb3RvdHlwZS5fbGlzdGVuID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMucGFuZUNvdW50IDw9IDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzLnRvdWNoID0gdGhpcy5fZXZlbnRUb3VjaC5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG91Y2hIYW5kbGVyLm9uKFxuICAgICAgICAncGFuIHBhbmVuZCBzd2lwZWxlZnQgc3dpcGVyaWdodCcsXG4gICAgICAgIHRoaXMuZXZlbnRzLnRvdWNoXG4gICAgKTtcblxuICAgIHRoaXMuZXZlbnRzLnJlc2l6ZSA9IHRoaXMuX2V2ZW50UmVzaXplLmJpbmQodGhpcyk7XG4gICAgYmVhbi5vbih3aW5kb3csICdyZXNpemUnLCB0aGlzLmV2ZW50cy5yZXNpemUpO1xuXG4gICAgaWYgKHRoaXMuYnRuTmV4dCkge1xuICAgICAgICB0aGlzLmV2ZW50cy5uZXh0ID0gdGhpcy5fZXZlbnROZXh0LmJpbmQodGhpcyk7XG4gICAgICAgIGJlYW4ub24odGhpcy5idG5OZXh0WzBdLCB0aGlzLmludGVyYWN0aW9uLCB0aGlzLmV2ZW50cy5uZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5idG5QcmV2KSB7XG4gICAgICAgIHRoaXMuZXZlbnRzLnByZXYgPSB0aGlzLl9ldmVudFByZXYuYmluZCh0aGlzKTtcbiAgICAgICAgYmVhbi5vbih0aGlzLmJ0blByZXZbMF0sIHRoaXMuaW50ZXJhY3Rpb24sIHRoaXMuZXZlbnRzLnByZXYpO1xuICAgIH1cbn1cblxuQ2Fyb3VzZWwucHJvdG90eXBlLl9zZXRPZmZzZXQgPSBmdW5jdGlvbihvZmZzZXQsIGR1cmF0aW9uLCBhbmltYXRlKSB7XG4gICAgdGhpcy5zbGlkZXIucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKTtcblxuICAgIGlmICh0cnVlID09PSBhbmltYXRlKSB7XG4gICAgICAgIHRoaXMuc2xpZGVyLmFkZENsYXNzKCdhbmltYXRlJyk7XG4gICAgfVxuXG4gICAgdmFyIHN0eWxlcyA9IHt9O1xuXG4gICAgaWYgKE1vZGVybml6ci5jc3N0cmFuc2Zvcm1zM2QpIHtcbiAgICAgICAgc3R5bGVzID0ge1xuICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgnICsgb2Zmc2V0ICsgJ3B4LDAsMCkgc2NhbGUzZCgxLDEsMSknXG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKE1vZGVybml6ci5jc3N0cmFuc2Zvcm1zKSB7XG4gICAgICAgc3R5bGVzID0ge1xuICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZSgnICsgb2Zmc2V0ICsgJ3B4LDApJ1xuICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgIHN0eWxlcyA9IHsnbGVmdCc6IG9mZnNldCArICdweCd9XG4gICAgfVxuXG4gICAgc3R5bGVzW01vZGVybml6ci5wcmVmaXhlZCgndHJhbnNpdGlvbicpXSA9IGR1cmF0aW9uICsgJ21zJ1xuICAgIHRoaXMuc2xpZGVyLmNzcyhzdHlsZXMpO1xufVxuXG5DYXJvdXNlbC5wcm90b3R5cGUuX3Nob3dQYW5lID0gZnVuY3Rpb24ocGFuZSwgZHVyYXRpb24sIGFuaW1hdGUpIHtcbiAgICB2YXIgaW5kZXggPSBNYXRoLm1heCgwLCBNYXRoLm1pbihwYW5lLCB0aGlzLnBhbmVDb3VudCAtIDEpKSxcbiAgICAgICAgZHVyYXRpb24gPSAndW5kZWZpbmVkJyAhPT0gdHlwZW9mIGR1cmF0aW9uID8gZHVyYXRpb24gOiBvcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgYW5pbWF0ZSA9ICd1bmRlZmluZWQnICE9PSB0eXBlb2YgYW5pbWF0ZSA/IGFuaW1hdGUgOiB0cnVlO1xuXG4gICAgdGhpcy5jdXJyZW50UGFuZSA9IGluZGV4O1xuXG4gICAgLy8gb3V0IG9mIGJvdW5kcyAtIHVzZSBmaXhlZCBkdXJhdGlvbiBmb3IgYm91bmNlIGJhY2tcbiAgICBpZiAoaW5kZXggIT09IHBhbmUpIHtcbiAgICAgICAgZHVyYXRpb24gPSBvcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICB9XG5cbiAgICB2YXIgb2Zmc2V0ID0gLSh0aGlzLnBhbmVXaWR0aCAqIHRoaXMuY3VycmVudFBhbmUpO1xuICAgIHRoaXMuX3NldE9mZnNldChvZmZzZXQsIGR1cmF0aW9uLCBhbmltYXRlKTtcblxuICAgIHRoaXMuX3VwZGF0ZVVJKCk7XG59XG5cbkNhcm91c2VsLnByb3RvdHlwZS5fdXBkYXRlVUkgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluZGljYXRvcnNbdGhpcy5jdXJyZW50UGFuZV0uYWRkQ2xhc3MoJ2luZGljYXRvci1jdXJyZW50Jyk7XG5cbiAgICBpZiAodGhpcy5pbmRpY2F0b3JzW3RoaXMuY3VycmVudFBhbmUgLSAxXSkge1xuICAgICAgICB0aGlzLmluZGljYXRvcnNbdGhpcy5jdXJyZW50UGFuZSAtIDFdLnJlbW92ZUNsYXNzKCdpbmRpY2F0b3ItY3VycmVudCcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmluZGljYXRvcnNbdGhpcy5jdXJyZW50UGFuZSArIDFdKSB7XG4gICAgICAgIHRoaXMuaW5kaWNhdG9yc1t0aGlzLmN1cnJlbnRQYW5lICsgMV0ucmVtb3ZlQ2xhc3MoJ2luZGljYXRvci1jdXJyZW50Jyk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhcm91c2VsOyIsIlxuLypcbnZhciBiZWFuID0gcmVxdWlyZSgnYmVhbicpO1xudmFyIGJvbnpvID0gcmVxdWlyZSgnYm9uem8nKTtcbnZhciBxd2VyeSA9IHJlcXVpcmUoJ3F3ZXJ5Jyk7XG5cbnZhciBvcHRpb25zID0ge1xuICAgIHBhbmVsU2VsZWN0b3I6ICcudGFiQ29udGVudCcsXG4gICAgdGFiU2VsZWN0b3I6ICcudGFiIGEnXG59O1xuXG5mdW5jdGlvbiBUYWJzKGNvbnRhaW5lcikge1xuICAgIHRoaXMuY29udGFpbmVyID0gYm9uem8ocXdlcnkoY29udGFpbmVyKSk7XG4gICAgdGhpcy5wYW5lbHMgPSBib256byhxd2VyeShvcHRpb25zLnBhbmVsU2VsZWN0b3IsIHRoaXMuY29udGFpbmVyKSk7XG5cbiAgICB0aGlzLmV2ZW50cyA9IHt9O1xuXG4gICAgLy8gYnVpbGQgYW5kIGxpc3RlblxuICAgIHRoaXMuX2J1aWxkKCk7XG4gICAgdGhpcy5fbGlzdGVuKCk7XG5cbiAgICB0aGlzLnNob3dUYWIoJyMnICsgdGhpcy5wYW5lbHNbMF0uaWQpO1xufVxuXG5UYWJzLnByb3RvdHlwZS5fYnVpbGQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnBhbmVscy5oaWRlKCk7XG4gICAgYm9uem8odGhpcy5wYW5lbHNbMF0pLnNob3coKTtcbn07XG5cblRhYnMucHJvdG90eXBlLl9saXN0ZW4gPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmV2ZW50cy5vblRhYkNsaWNrID0gdGhpcy5fb25UYWJDbGljay5iaW5kKHRoaXMpO1xuICAgIGJlYW4ub24odGhpcy5jb250YWluZXJbMF0sICdjbGljaycsIG9wdGlvbnMudGFiU2VsZWN0b3IsIHRoaXMuZXZlbnRzLm9uVGFiQ2xpY2spO1xufTtcblxuVGFicy5wcm90b3R5cGUuX29uVGFiQ2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zaG93VGFiKGV2ZW50LmN1cnJlbnRUYXJnZXQuaGFzaCk7XG59O1xuXG5UYWJzLnByb3RvdHlwZS5zaG93VGFiID0gZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgICB0aGlzLmN1cnJlbnRUYWIgPSBzZWxlY3RvcjtcbiAgICB0aGlzLnVwZGF0ZVVJKCk7XG59O1xuXG5UYWJzLnByb3RvdHlwZS51cGRhdGVVSSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucGFuZWxzLmhpZGUoKTtcbiAgICBib256byhxd2VyeSgnLnRhYlNlbGVjdGVkJykpLnJlbW92ZUNsYXNzKCd0YWJTZWxlY3RlZCcpO1xuICAgIGJvbnpvKHF3ZXJ5KHRoaXMuY3VycmVudFRhYikpLnNob3coKTtcbiAgICBib256byhxd2VyeSgnYVtocmVmPVwiJyArIHRoaXMuY3VycmVudFRhYiArICdcIl0nLCB0aGlzLmNvbnRhaW5lcikpLnBhcmVudCgpLmFkZENsYXNzKCd0YWJTZWxlY3RlZCcpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUYWJzOyovXG4iLCJ2YXIgYm9uem8gPSByZXF1aXJlKCdib256bycpO1xudmFyIENhcm91c2VsID0gcmVxdWlyZSgnbGliL3VpL2Nhcm91c2VsJyk7XG52YXIgZG9tcmVhZHkgPSByZXF1aXJlKCdkb21yZWFkeScpO1xudmFyIFRhYnMgPSByZXF1aXJlKCdsaWIvdWkvdGFicycpO1xudmFyIHF3ZXJ5ID0gcmVxdWlyZSgncXdlcnknKTtcbi8vdmFyIE92ZXJsYXkgPSByZXF1aXJlKCdsaWIvdWkvb3ZlcmxheScpO1xudmFyIENhbGVuZGFyID0gcmVxdWlyZSgnbGliL3VpL2NhbGVuZGFyJyk7XG5cbmRvbXJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICBib256byhxd2VyeSgnLmNhcm91c2VsJykpLmVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBuZXcgQ2Fyb3VzZWwoZWxlbWVudCk7XG4gICAgfSk7XG4vLyBDcmVhdGluZyBuZXcgdGFic1xuICAgIGJvbnpvKHF3ZXJ5KCcudGFicycpKS5lYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgbmV3IFRhYnMoZWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICBib256byhxd2VyeSgnLmNhbGVuZGFyJykpLmVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBuZXcgQ2FsZW5kYXIoZWxlbWVudCk7XG4gICAgfSk7XG59KTsiXX0=
