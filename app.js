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
},{"bean":"bean","bonzo":"bonzo","domready":"domready","hammerjs":"hammerjs","modernizr":1,"qwery":"qwery"}],3:[function(require,module,exports){
var bonzo = require('bonzo');
var Carousel = require('lib/ui/carousel');
var domready = require('domready');
var qwery = require('qwery');

domready(function () {
    bonzo(qwery('.carousel')).each(function(element) {
        new Carousel(element);
    });
});
},{"bonzo":"bonzo","domready":"domready","lib/ui/carousel":2,"qwery":"qwery"}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvbW9kZXJuaXpyLmpzIiwic3JjL2xpYi91aS9jYXJvdXNlbC5qcyIsInNyYy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiOyB2YXIgX19icm93c2VyaWZ5X3NoaW1fcmVxdWlyZV9fPXJlcXVpcmU7KGZ1bmN0aW9uIGJyb3dzZXJpZnlTaGltKG1vZHVsZSwgZXhwb3J0cywgcmVxdWlyZSwgZGVmaW5lLCBicm93c2VyaWZ5X3NoaW1fX2RlZmluZV9fbW9kdWxlX19leHBvcnRfXykge1xuLyohIG1vZGVybml6ciAzLjMuMSAoQ3VzdG9tIEJ1aWxkKSB8IE1JVCAqXG4gKiBodHRwOi8vbW9kZXJuaXpyLmNvbS9kb3dubG9hZC8/LWNzc3RyYW5zZm9ybXMtY3NzdHJhbnNmb3JtczNkLWNzc3RyYW5zaXRpb25zLXRvdWNoZXZlbnRzLXByZWZpeGVkLXByZWZpeGVkY3NzLXNldGNsYXNzZXMgISovXG4hZnVuY3Rpb24oZSxuLHQpe2Z1bmN0aW9uIHIoZSxuKXtyZXR1cm4gdHlwZW9mIGU9PT1ufWZ1bmN0aW9uIG8oKXt2YXIgZSxuLHQsbyxzLGksYTtmb3IodmFyIGYgaW4gQylpZihDLmhhc093blByb3BlcnR5KGYpKXtpZihlPVtdLG49Q1tmXSxuLm5hbWUmJihlLnB1c2gobi5uYW1lLnRvTG93ZXJDYXNlKCkpLG4ub3B0aW9ucyYmbi5vcHRpb25zLmFsaWFzZXMmJm4ub3B0aW9ucy5hbGlhc2VzLmxlbmd0aCkpZm9yKHQ9MDt0PG4ub3B0aW9ucy5hbGlhc2VzLmxlbmd0aDt0KyspZS5wdXNoKG4ub3B0aW9ucy5hbGlhc2VzW3RdLnRvTG93ZXJDYXNlKCkpO2ZvcihvPXIobi5mbixcImZ1bmN0aW9uXCIpP24uZm4oKTpuLmZuLHM9MDtzPGUubGVuZ3RoO3MrKylpPWVbc10sYT1pLnNwbGl0KFwiLlwiKSwxPT09YS5sZW5ndGg/TW9kZXJuaXpyW2FbMF1dPW86KCFNb2Rlcm5penJbYVswXV18fE1vZGVybml6clthWzBdXWluc3RhbmNlb2YgQm9vbGVhbnx8KE1vZGVybml6clthWzBdXT1uZXcgQm9vbGVhbihNb2Rlcm5penJbYVswXV0pKSxNb2Rlcm5penJbYVswXV1bYVsxXV09bykseS5wdXNoKChvP1wiXCI6XCJuby1cIikrYS5qb2luKFwiLVwiKSl9fWZ1bmN0aW9uIHMoZSl7dmFyIG49Uy5jbGFzc05hbWUsdD1Nb2Rlcm5penIuX2NvbmZpZy5jbGFzc1ByZWZpeHx8XCJcIjtpZih3JiYobj1uLmJhc2VWYWwpLE1vZGVybml6ci5fY29uZmlnLmVuYWJsZUpTQ2xhc3Mpe3ZhciByPW5ldyBSZWdFeHAoXCIoXnxcXFxccylcIit0K1wibm8tanMoXFxcXHN8JClcIik7bj1uLnJlcGxhY2UocixcIiQxXCIrdCtcImpzJDJcIil9TW9kZXJuaXpyLl9jb25maWcuZW5hYmxlQ2xhc3NlcyYmKG4rPVwiIFwiK3QrZS5qb2luKFwiIFwiK3QpLHc/Uy5jbGFzc05hbWUuYmFzZVZhbD1uOlMuY2xhc3NOYW1lPW4pfWZ1bmN0aW9uIGkoZSl7cmV0dXJuIGUucmVwbGFjZSgvKFthLXpdKS0oW2Etel0pL2csZnVuY3Rpb24oZSxuLHQpe3JldHVybiBuK3QudG9VcHBlckNhc2UoKX0pLnJlcGxhY2UoL14tLyxcIlwiKX1mdW5jdGlvbiBhKGUpe3JldHVybiBlLnJlcGxhY2UoLyhbQS1aXSkvZyxmdW5jdGlvbihlLG4pe3JldHVyblwiLVwiK24udG9Mb3dlckNhc2UoKX0pLnJlcGxhY2UoL15tcy0vLFwiLW1zLVwiKX1mdW5jdGlvbiBmKGUsbil7cmV0dXJuISF+KFwiXCIrZSkuaW5kZXhPZihuKX1mdW5jdGlvbiB1KCl7cmV0dXJuXCJmdW5jdGlvblwiIT10eXBlb2Ygbi5jcmVhdGVFbGVtZW50P24uY3JlYXRlRWxlbWVudChhcmd1bWVudHNbMF0pOnc/bi5jcmVhdGVFbGVtZW50TlMuY2FsbChuLFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixhcmd1bWVudHNbMF0pOm4uY3JlYXRlRWxlbWVudC5hcHBseShuLGFyZ3VtZW50cyl9ZnVuY3Rpb24gbChlLG4pe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBlLmFwcGx5KG4sYXJndW1lbnRzKX19ZnVuY3Rpb24gcChlLG4sdCl7dmFyIG87Zm9yKHZhciBzIGluIGUpaWYoZVtzXWluIG4pcmV0dXJuIHQ9PT0hMT9lW3NdOihvPW5bZVtzXV0scihvLFwiZnVuY3Rpb25cIik/bChvLHR8fG4pOm8pO3JldHVybiExfWZ1bmN0aW9uIGQoKXt2YXIgZT1uLmJvZHk7cmV0dXJuIGV8fChlPXUodz9cInN2Z1wiOlwiYm9keVwiKSxlLmZha2U9ITApLGV9ZnVuY3Rpb24gYyhlLHQscixvKXt2YXIgcyxpLGEsZixsPVwibW9kZXJuaXpyXCIscD11KFwiZGl2XCIpLGM9ZCgpO2lmKHBhcnNlSW50KHIsMTApKWZvcig7ci0tOylhPXUoXCJkaXZcIiksYS5pZD1vP29bcl06bCsocisxKSxwLmFwcGVuZENoaWxkKGEpO3JldHVybiBzPXUoXCJzdHlsZVwiKSxzLnR5cGU9XCJ0ZXh0L2Nzc1wiLHMuaWQ9XCJzXCIrbCwoYy5mYWtlP2M6cCkuYXBwZW5kQ2hpbGQocyksYy5hcHBlbmRDaGlsZChwKSxzLnN0eWxlU2hlZXQ/cy5zdHlsZVNoZWV0LmNzc1RleHQ9ZTpzLmFwcGVuZENoaWxkKG4uY3JlYXRlVGV4dE5vZGUoZSkpLHAuaWQ9bCxjLmZha2UmJihjLnN0eWxlLmJhY2tncm91bmQ9XCJcIixjLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIsZj1TLnN0eWxlLm92ZXJmbG93LFMuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIixTLmFwcGVuZENoaWxkKGMpKSxpPXQocCxlKSxjLmZha2U/KGMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjKSxTLnN0eWxlLm92ZXJmbG93PWYsUy5vZmZzZXRIZWlnaHQpOnAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwKSwhIWl9ZnVuY3Rpb24gbShuLHIpe3ZhciBvPW4ubGVuZ3RoO2lmKFwiQ1NTXCJpbiBlJiZcInN1cHBvcnRzXCJpbiBlLkNTUyl7Zm9yKDtvLS07KWlmKGUuQ1NTLnN1cHBvcnRzKGEobltvXSkscikpcmV0dXJuITA7cmV0dXJuITF9aWYoXCJDU1NTdXBwb3J0c1J1bGVcImluIGUpe2Zvcih2YXIgcz1bXTtvLS07KXMucHVzaChcIihcIithKG5bb10pK1wiOlwiK3IrXCIpXCIpO3JldHVybiBzPXMuam9pbihcIiBvciBcIiksYyhcIkBzdXBwb3J0cyAoXCIrcytcIikgeyAjbW9kZXJuaXpyIHsgcG9zaXRpb246IGFic29sdXRlOyB9IH1cIixmdW5jdGlvbihlKXtyZXR1cm5cImFic29sdXRlXCI9PWdldENvbXB1dGVkU3R5bGUoZSxudWxsKS5wb3NpdGlvbn0pfXJldHVybiB0fWZ1bmN0aW9uIHYoZSxuLG8scyl7ZnVuY3Rpb24gYSgpe3AmJihkZWxldGUgTi5zdHlsZSxkZWxldGUgTi5tb2RFbGVtKX1pZihzPXIocyxcInVuZGVmaW5lZFwiKT8hMTpzLCFyKG8sXCJ1bmRlZmluZWRcIikpe3ZhciBsPW0oZSxvKTtpZighcihsLFwidW5kZWZpbmVkXCIpKXJldHVybiBsfWZvcih2YXIgcCxkLGMsdixoLGc9W1wibW9kZXJuaXpyXCIsXCJ0c3BhblwiXTshTi5zdHlsZTspcD0hMCxOLm1vZEVsZW09dShnLnNoaWZ0KCkpLE4uc3R5bGU9Ti5tb2RFbGVtLnN0eWxlO2ZvcihjPWUubGVuZ3RoLGQ9MDtjPmQ7ZCsrKWlmKHY9ZVtkXSxoPU4uc3R5bGVbdl0sZih2LFwiLVwiKSYmKHY9aSh2KSksTi5zdHlsZVt2XSE9PXQpe2lmKHN8fHIobyxcInVuZGVmaW5lZFwiKSlyZXR1cm4gYSgpLFwicGZ4XCI9PW4/djohMDt0cnl7Ti5zdHlsZVt2XT1vfWNhdGNoKHkpe31pZihOLnN0eWxlW3ZdIT1oKXJldHVybiBhKCksXCJwZnhcIj09bj92OiEwfXJldHVybiBhKCksITF9ZnVuY3Rpb24gaChlLG4sdCxvLHMpe3ZhciBpPWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZS5zbGljZSgxKSxhPShlK1wiIFwiK3ouam9pbihpK1wiIFwiKStpKS5zcGxpdChcIiBcIik7cmV0dXJuIHIobixcInN0cmluZ1wiKXx8cihuLFwidW5kZWZpbmVkXCIpP3YoYSxuLG8scyk6KGE9KGUrXCIgXCIrRS5qb2luKGkrXCIgXCIpK2kpLnNwbGl0KFwiIFwiKSxwKGEsbix0KSl9ZnVuY3Rpb24gZyhlLG4scil7cmV0dXJuIGgoZSx0LHQsbixyKX12YXIgeT1bXSxDPVtdLHg9e192ZXJzaW9uOlwiMy4zLjFcIixfY29uZmlnOntjbGFzc1ByZWZpeDpcIlwiLGVuYWJsZUNsYXNzZXM6ITAsZW5hYmxlSlNDbGFzczohMCx1c2VQcmVmaXhlczohMH0sX3E6W10sb246ZnVuY3Rpb24oZSxuKXt2YXIgdD10aGlzO3NldFRpbWVvdXQoZnVuY3Rpb24oKXtuKHRbZV0pfSwwKX0sYWRkVGVzdDpmdW5jdGlvbihlLG4sdCl7Qy5wdXNoKHtuYW1lOmUsZm46bixvcHRpb25zOnR9KX0sYWRkQXN5bmNUZXN0OmZ1bmN0aW9uKGUpe0MucHVzaCh7bmFtZTpudWxsLGZuOmV9KX19LE1vZGVybml6cj1mdW5jdGlvbigpe307TW9kZXJuaXpyLnByb3RvdHlwZT14LE1vZGVybml6cj1uZXcgTW9kZXJuaXpyO3ZhciBTPW4uZG9jdW1lbnRFbGVtZW50LHc9XCJzdmdcIj09PVMubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxfPVwiQ1NTXCJpbiBlJiZcInN1cHBvcnRzXCJpbiBlLkNTUyxiPVwic3VwcG9ydHNDU1NcImluIGU7TW9kZXJuaXpyLmFkZFRlc3QoXCJzdXBwb3J0c1wiLF98fGIpO3ZhciBUPVwiTW96IE8gbXMgV2Via2l0XCIsej14Ll9jb25maWcudXNlUHJlZml4ZXM/VC5zcGxpdChcIiBcIik6W107eC5fY3Nzb21QcmVmaXhlcz16O3ZhciBQPWZ1bmN0aW9uKG4pe3ZhciByLG89TC5sZW5ndGgscz1lLkNTU1J1bGU7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIHMpcmV0dXJuIHQ7aWYoIW4pcmV0dXJuITE7aWYobj1uLnJlcGxhY2UoL15ALyxcIlwiKSxyPW4ucmVwbGFjZSgvLS9nLFwiX1wiKS50b1VwcGVyQ2FzZSgpK1wiX1JVTEVcIixyIGluIHMpcmV0dXJuXCJAXCIrbjtmb3IodmFyIGk9MDtvPmk7aSsrKXt2YXIgYT1MW2ldLGY9YS50b1VwcGVyQ2FzZSgpK1wiX1wiK3I7aWYoZiBpbiBzKXJldHVyblwiQC1cIithLnRvTG93ZXJDYXNlKCkrXCItXCIrbn1yZXR1cm4hMX07eC5hdFJ1bGU9UDt2YXIgRT14Ll9jb25maWcudXNlUHJlZml4ZXM/VC50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKTpbXTt4Ll9kb21QcmVmaXhlcz1FO3ZhciBqPXgudGVzdFN0eWxlcz1jLGs9e2VsZW06dShcIm1vZGVybml6clwiKX07TW9kZXJuaXpyLl9xLnB1c2goZnVuY3Rpb24oKXtkZWxldGUgay5lbGVtfSk7dmFyIE49e3N0eWxlOmsuZWxlbS5zdHlsZX07TW9kZXJuaXpyLl9xLnVuc2hpZnQoZnVuY3Rpb24oKXtkZWxldGUgTi5zdHlsZX0pLHgudGVzdEFsbFByb3BzPWg7dmFyIEE9eC5wcmVmaXhlZD1mdW5jdGlvbihlLG4sdCl7cmV0dXJuIDA9PT1lLmluZGV4T2YoXCJAXCIpP1AoZSk6KC0xIT1lLmluZGV4T2YoXCItXCIpJiYoZT1pKGUpKSxuP2goZSxuLHQpOmgoZSxcInBmeFwiKSl9O3gucHJlZml4ZWRDU1M9ZnVuY3Rpb24oZSl7dmFyIG49QShlKTtyZXR1cm4gbiYmYShuKX07eC50ZXN0QWxsUHJvcHM9ZyxNb2Rlcm5penIuYWRkVGVzdChcImNzc3RyYW5zZm9ybXNcIixmdW5jdGlvbigpe3JldHVybi0xPT09bmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiQW5kcm9pZCAyLlwiKSYmZyhcInRyYW5zZm9ybVwiLFwic2NhbGUoMSlcIiwhMCl9KSxNb2Rlcm5penIuYWRkVGVzdChcImNzc3RyYW5zZm9ybXMzZFwiLGZ1bmN0aW9uKCl7dmFyIGU9ISFnKFwicGVyc3BlY3RpdmVcIixcIjFweFwiLCEwKSxuPU1vZGVybml6ci5fY29uZmlnLnVzZVByZWZpeGVzO2lmKGUmJighbnx8XCJ3ZWJraXRQZXJzcGVjdGl2ZVwiaW4gUy5zdHlsZSkpe3ZhciB0LHI9XCIjbW9kZXJuaXpye3dpZHRoOjA7aGVpZ2h0OjB9XCI7TW9kZXJuaXpyLnN1cHBvcnRzP3Q9XCJAc3VwcG9ydHMgKHBlcnNwZWN0aXZlOiAxcHgpXCI6KHQ9XCJAbWVkaWEgKHRyYW5zZm9ybS0zZClcIixuJiYodCs9XCIsKC13ZWJraXQtdHJhbnNmb3JtLTNkKVwiKSksdCs9XCJ7I21vZGVybml6cnt3aWR0aDo3cHg7aGVpZ2h0OjE4cHg7bWFyZ2luOjA7cGFkZGluZzowO2JvcmRlcjowfX1cIixqKHIrdCxmdW5jdGlvbihuKXtlPTc9PT1uLm9mZnNldFdpZHRoJiYxOD09PW4ub2Zmc2V0SGVpZ2h0fSl9cmV0dXJuIGV9KSxNb2Rlcm5penIuYWRkVGVzdChcImNzc3RyYW5zaXRpb25zXCIsZyhcInRyYW5zaXRpb25cIixcImFsbFwiLCEwKSk7dmFyIEw9eC5fY29uZmlnLnVzZVByZWZpeGVzP1wiIC13ZWJraXQtIC1tb3otIC1vLSAtbXMtIFwiLnNwbGl0KFwiIFwiKTpbXCJcIixcIlwiXTt4Ll9wcmVmaXhlcz1MLE1vZGVybml6ci5hZGRUZXN0KFwidG91Y2hldmVudHNcIixmdW5jdGlvbigpe3ZhciB0O2lmKFwib250b3VjaHN0YXJ0XCJpbiBlfHxlLkRvY3VtZW50VG91Y2gmJm4gaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoKXQ9ITA7ZWxzZXt2YXIgcj1bXCJAbWVkaWEgKFwiLEwuam9pbihcInRvdWNoLWVuYWJsZWQpLChcIiksXCJoZWFydHpcIixcIilcIixcInsjbW9kZXJuaXpye3RvcDo5cHg7cG9zaXRpb246YWJzb2x1dGV9fVwiXS5qb2luKFwiXCIpO2oocixmdW5jdGlvbihlKXt0PTk9PT1lLm9mZnNldFRvcH0pfXJldHVybiB0fSksbygpLHMoeSksZGVsZXRlIHguYWRkVGVzdCxkZWxldGUgeC5hZGRBc3luY1Rlc3Q7Zm9yKHZhciBPPTA7TzxNb2Rlcm5penIuX3EubGVuZ3RoO08rKylNb2Rlcm5penIuX3FbT10oKTtlLk1vZGVybml6cj1Nb2Rlcm5penJ9KHdpbmRvdyxkb2N1bWVudCk7XG47IGJyb3dzZXJpZnlfc2hpbV9fZGVmaW5lX19tb2R1bGVfX2V4cG9ydF9fKHR5cGVvZiBNb2Rlcm5penIgIT0gXCJ1bmRlZmluZWRcIiA/IE1vZGVybml6ciA6IHdpbmRvdy5Nb2Rlcm5penIpO1xuXG59KS5jYWxsKGdsb2JhbCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBmdW5jdGlvbiBkZWZpbmVFeHBvcnQoZXgpIHsgbW9kdWxlLmV4cG9ydHMgPSBleDsgfSk7XG4iLCJ2YXIgYmVhbiA9IHJlcXVpcmUoJ2JlYW4nKTtcbnZhciBib256byA9IHJlcXVpcmUoJ2JvbnpvJyk7XG52YXIgZG9tcmVhZHkgPSByZXF1aXJlKCdkb21yZWFkeScpO1xudmFyIEhhbW1lciA9IHJlcXVpcmUoJ2hhbW1lcmpzJyk7XG52YXIgTW9kZXJuaXpyID0gcmVxdWlyZSgnbW9kZXJuaXpyJyk7XG52YXIgcXdlcnkgPSByZXF1aXJlKCdxd2VyeScpO1xuXG52YXIgb3B0aW9ucyA9IHtcbiAgICBjYXJvdXNlbFNlbGVjdG9yOiAnLmNhcm91c2VsJyxcbiAgICBwYW5lU2VsZWN0b3I6ICdsaScsXG4gICAgc2xpZGVyU2VsZWN0b3I6ICcuY2Fyb3VzZWxfX3dyYXBwZXInLFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJzMwMCcsXG4gICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1pbi1vdXQnLFxuICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvblRvdWNoOiAnZWFzZS1vdXQnXG59O1xuXG52YXIgRElSRUNUSU9OX0JBQ0tXQVJEID0gMSxcbiAgICBESVJFQ1RJT05fRk9SV0FSRCA9IDI7XG5cbmZ1bmN0aW9uIENhcm91c2VsKGNvbnRhaW5lcikge1xuICAgIHRoaXMuY29udGFpbmVyID0gYm9uem8ocXdlcnkoY29udGFpbmVyKSk7XG4gICAgdGhpcy5zbGlkZXIgPSBib256byhxd2VyeShvcHRpb25zLnNsaWRlclNlbGVjdG9yLCB0aGlzLmNvbnRhaW5lcikpO1xuICAgIHRoaXMucGFuZXMgPSBib256byhxd2VyeShvcHRpb25zLnBhbmVTZWxlY3RvciwgdGhpcy5zbGlkZXIpKTtcblxuICAgIC8vIHNldCB1cCBwcm9wZXJ0aWVzXG4gICAgdGhpcy5kaXJlY3Rpb24gPSBESVJFQ1RJT05fRk9SV0FSRDtcbiAgICB0aGlzLmludGVyYWN0aW9uID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93ID8gJ3RvdWNoc3RhcnQnIDogJ2NsaWNrJztcbiAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICAgIHRoaXMuaW5kaWNhdG9ycyA9IFtdO1xuICAgIHRoaXMuY3VycmVudFBhbmUgPSAwO1xuXG4gICAgLy8gYnVpbGQgYW5kIGxpc3RlblxuICAgIHRoaXMuX2J1aWxkKCk7XG4gICAgdGhpcy5fbGlzdGVuKCk7XG59XG5cbkNhcm91c2VsLnByb3RvdHlwZS5fYWRkSW5kaWNhdG9yID0gZnVuY3Rpb24oaXRlbSkge1xuICAgIHZhciBpbmRpY2F0b3IgPSBib256byhib256by5jcmVhdGUoJzxzcGFuPicpKS5hZGRDbGFzcygnaW5kaWNhdG9yJyk7XG4gICAgdGhpcy5pbmRpY2F0b3JzLnB1c2goaW5kaWNhdG9yKTtcbiAgICB0aGlzLmluZGljYXRvckNvbnRhaW5lci5hcHBlbmQoaW5kaWNhdG9yKTtcbn1cblxuQ2Fyb3VzZWwucHJvdG90eXBlLl9idWlsZCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudG91Y2hIYW5kbGVyID0gbmV3IEhhbW1lcih0aGlzLnNsaWRlclswXSwge1xuICAgICAgICBkcmFnX2xvY2tfdG9fYXhpczogdHJ1ZVxuICAgIH0pO1xuXG4gICAgLy8gY291bnQgcGFuZXNcbiAgICB0aGlzLnBhbmVDb3VudCA9IHRoaXMucGFuZXMubGVuZ3RoO1xuXG4gICAgLy8gZ2V0IHdpZHRoIG9mIHBhbmVzXG4gICAgdGhpcy5wYW5lV2lkdGggPSBwYXJzZUludCh0aGlzLmNvbnRhaW5lci5jc3MoJ3dpZHRoJykpO1xuXG4gICAgLy8gY2FwdHVyZSB1aSBjb250cm9sc1xuICAgIHRoaXMuYnRuTmV4dCA9IGJvbnpvKHF3ZXJ5KCcubmV4dCcsIHRoaXMuY29udGFpbmVyKSk7XG4gICAgdGhpcy5idG5QcmV2ID0gYm9uem8ocXdlcnkoJy5wcmV2JywgdGhpcy5jb250YWluZXIpKTtcblxuICAgIHRoaXMuaW5kaWNhdG9yQ29udGFpbmVyID0gYm9uem8ocXdlcnkoJy5pbmRpY2F0b3ItY29udGFpbmVyJywgdGhpcy5jb250YWluZXIpKTtcblxuICAgIGlmICh0aGlzLnBhbmVDb3VudCA+IDEpIHsgICAgXG4gICAgICAgIC8vIGNyZWF0ZSBpbmRpY2F0b3JzXG4gICAgICAgIHRoaXMucGFuZXMuZWFjaCh0aGlzLl9hZGRJbmRpY2F0b3IuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVVJKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5idG5OZXh0LmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgIHRoaXMuYnRuUHJldi5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICB0aGlzLmluZGljYXRvckNvbnRhaW5lci5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgIH1cbn1cblxuQ2Fyb3VzZWwucHJvdG90eXBlLl9ldmVudFRvdWNoID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgc3dpdGNoKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgY2FzZSAncGFuJzpcbiAgICAgICAgY2FzZSAncGFubGVmdCc6XG4gICAgICAgIGNhc2UgJ3BhbnJpZ2h0JzpcbiAgICAgICAgICAgIC8vIHN0aWNrIHRvIHRoZSBmaW5nZXJcbiAgICAgICAgICAgIHZhciBwYW5lT2Zmc2V0ID0gLXRoaXMucGFuZVdpZHRoICogdGhpcy5jdXJyZW50UGFuZTtcbiAgICAgICAgICAgIHZhciBkcmFnT2Zmc2V0ID0gZXZlbnQuZGVsdGFYO1xuXG4gICAgICAgICAgICAvLyBzbG93IGRvd24gYXQgdGhlIGZpcnN0IGFuZCBsYXN0IHBhbmVcbiAgICAgICAgICAgIGlmKCh0aGlzLmN1cnJlbnRQYW5lID09IDAgJiYgZXZlbnQuZGlyZWN0aW9uID09IEhhbW1lci5ESVJFQ1RJT05fUklHSFQpIHx8XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLmN1cnJlbnRQYW5lID09IHRoaXMucGFuZUNvdW50IC0gMSAmJiBldmVudC5kaXJlY3Rpb24gPT0gSGFtbWVyLkRJUkVDVElPTl9MRUZUKSkge1xuICAgICAgICAgICAgICAgIGRyYWdPZmZzZXQgKj0gLjQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3NldE9mZnNldChkcmFnT2Zmc2V0ICsgcGFuZU9mZnNldCwgMCwgZmFsc2UpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncGFuZW5kJzpcbiAgICAgICAgICAgIC8vIG1vcmUgdGhlbiA1MCUgbW92ZWQsIG5hdmlnYXRlXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZXZlbnQuZGVsdGFYKSA+IHRoaXMucGFuZVdpZHRoICogLjQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGlyZWN0aW9uID09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2hvd1BhbmUodGhpcy5jdXJyZW50UGFuZSAtIDEsIHRoaXMuX2dldFJlbWFpbmluZ0R1cmF0aW9uKGV2ZW50KSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2hvd1BhbmUodGhpcy5jdXJyZW50UGFuZSArIDEsIHRoaXMuX2dldFJlbWFpbmluZ0R1cmF0aW9uKGV2ZW50KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBib3VuY2UgYmFja1xuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dQYW5lKHRoaXMuY3VycmVudFBhbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnc3dpcGVsZWZ0JzpcbiAgICAgICAgICAgIHRoaXMuX3Nob3dQYW5lKHRoaXMuY3VycmVudFBhbmUgKyAxLCB0aGlzLl9nZXRSZW1haW5pbmdEdXJhdGlvbihldmVudCkpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnc3dpcGVyaWdodCc6XG4gICAgICAgICAgICB0aGlzLl9zaG93UGFuZSh0aGlzLmN1cnJlbnRQYW5lIC0gMSwgdGhpcy5fZ2V0UmVtYWluaW5nRHVyYXRpb24oZXZlbnQpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuQ2Fyb3VzZWwucHJvdG90eXBlLl9ldmVudE5leHQgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMuX3Nob3dQYW5lKHRoaXMuY3VycmVudFBhbmUgKyAxKTtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IERJUkVDVElPTl9GT1JXQVJEO1xufVxuXG5DYXJvdXNlbC5wcm90b3R5cGUuX2V2ZW50UmVzaXplID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLnBhbmVXaWR0aCA9IHBhcnNlSW50KHRoaXMuY29udGFpbmVyLmNzcygnd2lkdGgnKSk7XG4gICAgdGhpcy5fc2hvd1BhbmUodGhpcy5jdXJyZW50UGFuZSwgMCwgZmFsc2UpO1xufVxuXG5DYXJvdXNlbC5wcm90b3R5cGUuX2V2ZW50UHJldiA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5fc2hvd1BhbmUodGhpcy5jdXJyZW50UGFuZSAtIDEpO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gRElSRUNUSU9OX0JBQ0tXQVJEO1xufVxuXG5DYXJvdXNlbC5wcm90b3R5cGUuX2dldFJlbWFpbmluZ0R1cmF0aW9uID0gZnVuY3Rpb24oZ2VzdHVyZSkge1xuICAgIHJldHVybiBNYXRoLmFicyhNYXRoLm1pbihcbiAgICAgICAgb3B0aW9ucy50cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICAgICh0aGlzLnBhbmVXaWR0aCAtIGdlc3R1cmUuZGlzdGFuY2UpIC8gZ2VzdHVyZS52ZWxvY2l0eVhcbiAgICApKTtcbn1cblxuQ2Fyb3VzZWwucHJvdG90eXBlLl9saXN0ZW4gPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5wYW5lQ291bnQgPD0gMSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5ldmVudHMudG91Y2ggPSB0aGlzLl9ldmVudFRvdWNoLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b3VjaEhhbmRsZXIub24oXG4gICAgICAgICdwYW4gcGFuZW5kIHN3aXBlbGVmdCBzd2lwZXJpZ2h0JyxcbiAgICAgICAgdGhpcy5ldmVudHMudG91Y2hcbiAgICApO1xuXG4gICAgdGhpcy5ldmVudHMucmVzaXplID0gdGhpcy5fZXZlbnRSZXNpemUuYmluZCh0aGlzKTtcbiAgICBiZWFuLm9uKHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMuZXZlbnRzLnJlc2l6ZSk7XG5cbiAgICBpZiAodGhpcy5idG5OZXh0KSB7XG4gICAgICAgIHRoaXMuZXZlbnRzLm5leHQgPSB0aGlzLl9ldmVudE5leHQuYmluZCh0aGlzKTtcbiAgICAgICAgYmVhbi5vbih0aGlzLmJ0bk5leHRbMF0sIHRoaXMuaW50ZXJhY3Rpb24sIHRoaXMuZXZlbnRzLm5leHQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmJ0blByZXYpIHtcbiAgICAgICAgdGhpcy5ldmVudHMucHJldiA9IHRoaXMuX2V2ZW50UHJldi5iaW5kKHRoaXMpO1xuICAgICAgICBiZWFuLm9uKHRoaXMuYnRuUHJldlswXSwgdGhpcy5pbnRlcmFjdGlvbiwgdGhpcy5ldmVudHMucHJldik7XG4gICAgfVxufVxuXG5DYXJvdXNlbC5wcm90b3R5cGUuX3NldE9mZnNldCA9IGZ1bmN0aW9uKG9mZnNldCwgZHVyYXRpb24sIGFuaW1hdGUpIHtcbiAgICB0aGlzLnNsaWRlci5yZW1vdmVDbGFzcygnYW5pbWF0ZScpO1xuXG4gICAgaWYgKHRydWUgPT09IGFuaW1hdGUpIHtcbiAgICAgICAgdGhpcy5zbGlkZXIuYWRkQ2xhc3MoJ2FuaW1hdGUnKTtcbiAgICB9XG5cbiAgICB2YXIgc3R5bGVzID0ge307XG5cbiAgICBpZiAoTW9kZXJuaXpyLmNzc3RyYW5zZm9ybXMzZCkge1xuICAgICAgICBzdHlsZXMgPSB7XG4gICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKCcgKyBvZmZzZXQgKyAncHgsMCwwKSBzY2FsZTNkKDEsMSwxKSdcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoTW9kZXJuaXpyLmNzc3RyYW5zZm9ybXMpIHtcbiAgICAgICBzdHlsZXMgPSB7XG4gICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlKCcgKyBvZmZzZXQgKyAncHgsMCknXG4gICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgc3R5bGVzID0geydsZWZ0Jzogb2Zmc2V0ICsgJ3B4J31cbiAgICB9XG5cbiAgICBzdHlsZXNbTW9kZXJuaXpyLnByZWZpeGVkKCd0cmFuc2l0aW9uJyldID0gZHVyYXRpb24gKyAnbXMnXG4gICAgdGhpcy5zbGlkZXIuY3NzKHN0eWxlcyk7XG59XG5cbkNhcm91c2VsLnByb3RvdHlwZS5fc2hvd1BhbmUgPSBmdW5jdGlvbihwYW5lLCBkdXJhdGlvbiwgYW5pbWF0ZSkge1xuICAgIHZhciBpbmRleCA9IE1hdGgubWF4KDAsIE1hdGgubWluKHBhbmUsIHRoaXMucGFuZUNvdW50IC0gMSkpLFxuICAgICAgICBkdXJhdGlvbiA9ICd1bmRlZmluZWQnICE9PSB0eXBlb2YgZHVyYXRpb24gPyBkdXJhdGlvbiA6IG9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgICBhbmltYXRlID0gJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBhbmltYXRlID8gYW5pbWF0ZSA6IHRydWU7XG5cbiAgICB0aGlzLmN1cnJlbnRQYW5lID0gaW5kZXg7XG5cbiAgICAvLyBvdXQgb2YgYm91bmRzIC0gdXNlIGZpeGVkIGR1cmF0aW9uIGZvciBib3VuY2UgYmFja1xuICAgIGlmIChpbmRleCAhPT0gcGFuZSkge1xuICAgICAgICBkdXJhdGlvbiA9IG9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgIH1cblxuICAgIHZhciBvZmZzZXQgPSAtKHRoaXMucGFuZVdpZHRoICogdGhpcy5jdXJyZW50UGFuZSk7XG4gICAgdGhpcy5fc2V0T2Zmc2V0KG9mZnNldCwgZHVyYXRpb24sIGFuaW1hdGUpO1xuXG4gICAgdGhpcy5fdXBkYXRlVUkoKTtcbn1cblxuQ2Fyb3VzZWwucHJvdG90eXBlLl91cGRhdGVVSSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5kaWNhdG9yc1t0aGlzLmN1cnJlbnRQYW5lXS5hZGRDbGFzcygnaW5kaWNhdG9yLWN1cnJlbnQnKTtcblxuICAgIGlmICh0aGlzLmluZGljYXRvcnNbdGhpcy5jdXJyZW50UGFuZSAtIDFdKSB7XG4gICAgICAgIHRoaXMuaW5kaWNhdG9yc1t0aGlzLmN1cnJlbnRQYW5lIC0gMV0ucmVtb3ZlQ2xhc3MoJ2luZGljYXRvci1jdXJyZW50Jyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW5kaWNhdG9yc1t0aGlzLmN1cnJlbnRQYW5lICsgMV0pIHtcbiAgICAgICAgdGhpcy5pbmRpY2F0b3JzW3RoaXMuY3VycmVudFBhbmUgKyAxXS5yZW1vdmVDbGFzcygnaW5kaWNhdG9yLWN1cnJlbnQnKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2Fyb3VzZWw7IiwidmFyIGJvbnpvID0gcmVxdWlyZSgnYm9uem8nKTtcbnZhciBDYXJvdXNlbCA9IHJlcXVpcmUoJ2xpYi91aS9jYXJvdXNlbCcpO1xudmFyIGRvbXJlYWR5ID0gcmVxdWlyZSgnZG9tcmVhZHknKTtcbnZhciBxd2VyeSA9IHJlcXVpcmUoJ3F3ZXJ5Jyk7XG5cbmRvbXJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICBib256byhxd2VyeSgnLmNhcm91c2VsJykpLmVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBuZXcgQ2Fyb3VzZWwoZWxlbWVudCk7XG4gICAgfSk7XG59KTsiXX0=
