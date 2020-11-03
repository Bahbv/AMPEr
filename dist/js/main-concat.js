/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses-shiv !*/
 !function(e,n,t){function a(e,n){return typeof e===n}function o(){var e,n,t,o,r,i,l;for(var c in A)if(A.hasOwnProperty(c)){if(e=[],n=A[c],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=a(n.fn,"function")?n.fn():n.fn,r=0;r<e.length;r++)i=e[r],l=i.split("."),1===l.length?Modernizr[l[0]]=o:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=o),s.push((o?"":"no-")+l.join("-"))}}function r(e){var n=u.className,t=Modernizr._config.classPrefix||"";if(f&&(n=n.baseVal),Modernizr._config.enableJSClass){var a=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(a,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),f?u.className.baseVal=n:u.className=n)}function i(e,n){if("object"==typeof e)for(var t in e)c(e,t)&&i(t,e[t]);else{e=e.toLowerCase();var a=e.split("."),o=Modernizr[a[0]];if(2==a.length&&(o=o[a[1]]),"undefined"!=typeof o)return Modernizr;n="function"==typeof n?n():n,1==a.length?Modernizr[a[0]]=n:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=n),r([(n&&0!=n?"":"no-")+a.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var s=[],A=[],l={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){A.push({name:e,fn:n,options:t})},addAsyncTest:function(e){A.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var c,u=n.documentElement,f="svg"===u.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;c=a(e,"undefined")||a(e.call,"undefined")?function(e,n){return n in e&&a(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),l._l={},l.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},l._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,a;for(e=0;e<t.length;e++)(a=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){l.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,t){function a(n){var a=n&&"load"===n.type?1==o.width:!1,r="webp"===e;i(e,r&&a?new Boolean(a):a),t&&t(n)}var o=new Image;o.onerror=a,o.onload=a,o.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],t=n.shift();e(t.name,t.uri,function(t){if(t&&"load"===t.type)for(var a=0;a<n.length;a++)e(n[a].name,n[a].uri)})});f||!function(e,n){function t(e,n){var t=e.createElement("p"),a=e.getElementsByTagName("head")[0]||e.documentElement;return t.innerHTML="x<style>"+n+"</style>",a.insertBefore(t.lastChild,a.firstChild)}function a(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e,n){var t=y.elements;"string"!=typeof t&&(t=t.join(" ")),"string"!=typeof e&&(e=e.join(" ")),y.elements=t+" "+e,l(n)}function r(e){var n=v[e[p]];return n||(n={},g++,e[p]=g,v[g]=n),n}function i(e,t,a){if(t||(t=n),u)return t.createElement(e);a||(a=r(t));var o;return o=a.cache[e]?a.cache[e].cloneNode():h.test(e)?(a.cache[e]=a.createElem(e)).cloneNode():a.createElem(e),!o.canHaveChildren||m.test(e)||o.tagUrn?o:a.frag.appendChild(o)}function s(e,t){if(e||(e=n),u)return e.createDocumentFragment();t=t||r(e);for(var o=t.frag.cloneNode(),i=0,s=a(),A=s.length;A>i;i++)o.createElement(s[i]);return o}function A(e,n){n.cache||(n.cache={},n.createElem=e.createElement,n.createFrag=e.createDocumentFragment,n.frag=n.createFrag()),e.createElement=function(t){return y.shivMethods?i(t,e,n):n.createElem(t)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+a().join().replace(/[\w\-:]+/g,function(e){return n.createElem(e),n.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,n.frag)}function l(e){e||(e=n);var a=r(e);return!y.shivCSS||c||a.hasCSS||(a.hasCSS=!!t(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||A(e,a),e}var c,u,f="3.7.3",d=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",g=0,v={};!function(){try{var e=n.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,u=1==e.childNodes.length||function(){n.createElement("a");var e=n.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(t){c=!0,u=!0}}();var y={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:f,shivCSS:d.shivCSS!==!1,supportsUnknownElements:u,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:l,createElement:i,createDocumentFragment:s,addElements:o};e.html5=y,l(n),"object"==typeof module&&module.exports&&(module.exports=y)}("undefined"!=typeof e?e:this,n),o(),r(s),delete l.addTest,delete l.addAsyncTest;for(var d=0;d<Modernizr._q.length;d++)Modernizr._q[d]();e.Modernizr=Modernizr}(window,document);
"use strict";

/*!
 * AMPEr
 * Vanilla javascript cookie banner compliant with the EU GDPR
 * (c) 2020 Bob Vrijland, MIT License, https://github.com/bahbv 
 */
var AMPEr = function () {
  'use strict'; //////////////////
  // Variables
  //////////////////

  var publicMethod = {};
  var settings;
  var firstTime = false; // Cookie object

  var AMPEr = {
    analytic: 0,
    marketing: 0,
    personalization: 0
  }; // Defaults

  var defaults = {
    cookieName: "AMPEr",
    cookieDays: 365,
    classPrefix: "AMPEr",
    language: "en",
    lexicon: {
      en: {
        modalTitle: "Hey! We want to give you cookies.",
        modalContent: "This is body text for giving a little bit more information about cookies in the modal ENGELS",
        acceptBtn: "Accept all",
        settingsBtn: "<span class='sr-only'>Settings</span><i class='icon-gear' aria-hidden='true'></i>",
        analytic: "Analytic cookies",
        marketing: "Marketing cookies",
        personalization: "Personalization cookies",
        essential: "Functional cookies"
      },
      nl: {
        modalTitle: "Hey, wil je een cookie?",
        modalContent: "Dit is body tekst voor een klein beetje tekst met wat extra informatie in de cookiemodal NEDERLANDS.",
        acceptBtn: "Accepteer alles",
        settingsBtn: "<span class='sr-only'>Instellingen</span>",
        analytic: "Analytische cookies",
        marketing: "Marketing cookies",
        personalization: "Personalisatie cookies",
        essential: "Functionele cookies"
      }
    },
    // @TODO: Maak multilingual
    cookies: {
      analytic: {
        vb1: {
          name: "Analytic cookie",
          provider: "Provider",
          duration: "Sessie",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        }
      },
      marketing: {
        vb2: {
          name: "Marketing cookie",
          provider: "Wij zelf",
          duration: "Sessie",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        }
      },
      personalization: {
        vb3: {
          name: "Personalization cookie",
          provider: "Wij zelf",
          duration: "Sessie",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        }
      },
      essential: {
        amper: {
          name: "AMPEr",
          provider: "Wij zelf",
          duration: "365 Dagen",
          description: "Deze cookie onthoud jouw voorkeuren voor cookies. Heel dubbel maar deze cookie is dus noodzakelijk als je geen cookies wilt!"
        }
      }
    },
    analyticCallback: function analyticCallback() {
      console.log("Consent for analytic cookies!");
    },
    marketingCallback: function marketingCallback() {
      console.log("Consent for marketing cookies!");
    },
    personalizationCallback: function personalizationCallback() {
      console.log("Consent for personalization cookies!");
    }
  }; //////////////////
  // Private methods
  //////////////////

  /**
   * Make the banner and attacht it to the body
      * @TODO: Make the settings HTML
      * @TODO: Make the information HTML
   */

  var showCookieWindow = function showCookieWindow() {
    // Make the modal
    var html;
    html = '<section class="' + settings.classPrefix + '_modal" id="AMPEr_Cookies">';
    html += '<div class="' + settings.classPrefix + '_modal_inner">';
    html += '<div id="AMPEr_modal_1">';
    html += '<h1 class="' + settings.classPrefix + '_modal_head">' + settings.lexicon[settings.language].modalTitle + '</h1>';
    html += '<p class="' + settings.classPrefix + '_modal_text">' + settings.lexicon[settings.language].modalContent + '</p>';
    html += '<div class="' + settings.classPrefix + '_modal_buttons">';
    html += '<button id="AMPEr_accept" class="' + settings.classPrefix + '_btn ' + settings.classPrefix + '_btn--accept">' + settings.lexicon[settings.language].acceptBtn + '</button>';
    html += '<button id="AMPEr_settings" class="' + settings.classPrefix + '_btn ' + settings.classPrefix + '_btn--settings">' + settings.lexicon[settings.language].settingsBtn + '</button>';
    html += '</div></div>';
    html += '</div></section>'; // Add the html to the body

    document.body.insertAdjacentHTML('beforeend', html); // Add functions to the buttons

    var acceptBtn = document.getElementById("AMPEr_accept");

    acceptBtn.onclick = function () {
      acceptAllAndClose();
    };

    var settingsBtn = document.getElementById("AMPEr_settings");

    settingsBtn.onclick = function () {
      showSettings();
    };
  };
  /**
   * Execute the callbacks for analytic, marketing and personalization cookies
   */


  var execute = function execute() {
    if (AMPEr.analytic == 1) settings.analyticCallback();
    if (AMPEr.marketing == 1) settings.marketingCallback();
    if (AMPEr.personalization == 1) settings.personalizationCallback();
  };
  /**
   * Saves the AMPEr object to a cookie and close the modal 
   * Also executes the callbacks if its the first time running.
   */


  var saveAndClose = function saveAndClose() {
    setCookie(settings.cookieName, AMPEr, settings.cookieDays);

    if (firstTime) {
      execute();
    }

    closeModal();
  };
  /**
   * @TODO: Switch to the settings page, a nice animation would be nice,
   * but maybe just use classes for now so we can style it however we want?
   */


  var showSettings = function showSettings() {
    console.log("Show settings");
  };
  /**
   * Closes the modal
   * @TODO:we could use a class and a timeout to give this a nice animation,
   * or animate it with javascript?
   */


  var closeModal = function closeModal() {
    var modal = document.getElementById("AMPEr_Cookies");
    modal.remove();
  };
  /* Accept all cookies, execute them if its the first time and close the modal */


  var acceptAllAndClose = function acceptAllAndClose() {
    AMPEr.analytic = 1;
    AMPEr.marketing = 1;
    AMPEr.personalization = 1;
    setCookie(settings.cookieName, AMPEr, settings.cookieDays);

    if (firstTime) {
      execute();
    }

    closeModal();
  };
  /**
   * Set a cookie 
   * @param {String} name 
   * @param {*} value 
   * @param {Number} days 
   */


  var setCookie = function setCookie(name, value, days) {
    value = JSON.stringify(value);
    var expires = "";

    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }

    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  };
  /**
   * Get a cookie
   * @param {String} name 
   */


  var getCookie = function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];

      while (c.charAt(0) == ' ') {
        c = c.substring(1, c.length);
      }

      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }

    return null;
  }; //////////////////
  // Initialize
  //////////////////

  /**
   * Initialize AMPEr
   */


  publicMethod.init = function (options) {
    // Merge settings with defaults
    settings = Object.assign({}, defaults, options); // Check if there already is a cookie, otherwise show the window and make one.

    var cookie = getCookie(settings.cookieName);

    if (cookie === null) {
      firstTime = true;
      setCookie(settings.cookieName, AMPEr, settings.cookieDays);
    } else {
      var cookieString = getCookie(settings.cookieName);
      AMPEr = JSON.parse(cookieString);
    }

    showCookieWindow(); // Execute callbacks

    if (!firstTime) {
      execute();
    }
  }; //////////////////
  // Public methods
  //////////////////

  /**
   * Add the modal to the html
   */


  publicMethod.openModal = function () {
    showCookieWindow();
  };
  /**
   * Returns true if the given category has consent given
   * @param {String} category 
   */


  publicMethod.getConsent = function (category) {
    switch (category) {
      case "analytic":
        if (AMPEr.analytic == 1) {
          return true;
        } else {
          return false;
        }

      case "marketing":
        if (AMPEr.marketing == 1) {
          return true;
        } else {
          return false;
        }

      case "personalization":
        if (AMPEr.personalization == 1) {
          return true;
        } else {
          return false;
        }

      default:
        console.log("Not a valid category");
        break;
    }
  };
  /**
   * Set the consent for analytic cookies
   * @param {Boolean} bool 
   */


  publicMethod.analytic = function (bool) {
    bool ? AMPEr.analytic = 1 : AMPEr.analytic = 0;
    setCookie(settings.cookieName, AMPEr, settings.cookieDays);
  };
  /**
   * Set the consent for marketing cookies
   * @param {Boolean} bool 
   */


  publicMethod.marketing = function (bool) {
    bool ? AMPEr.marketing = 1 : AMPEr.analytic = 0;
    setCookie(settings.cookieName, AMPEr, settings.cookieDays);
  };
  /**
   * Set the consent for personalization cookies
   * @param {Boolean} bool 
   */


  publicMethod.personalization = function (bool) {
    bool ? AMPEr.personalization = 1 : AMPEr.analytic = 0;
    setCookie(settings.cookieName, AMPEr, settings.cookieDays);
  }; // Return the public methods


  return publicMethod;
}();
"use strict";

function main() {
  AMPEr.init();
}

main();