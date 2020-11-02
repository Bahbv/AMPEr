"use strict";

/*!
 * AMPEr
 * Vanilla javascript cookie banner compliant with the EU GDPR
 * (c) 2020 Bob Vrijland, MIT License, https://github.com/bahbv 
 */
var AMPEr = function () {
  'use strict'; //
  // Variables
  //

  var publicMethod = {};
  var AMPEr = {
    analytic: 0,
    marketing: 0,
    personalization: 0
  };
  var defaults = {
    cookieName: "AMPEr",
    cookieDays: 365,
    classPrefix: "AMPEr",
    language: "nl",
    text: {
      en: {
        modalTitle: "Hey! We want to give you cookies."
      },
      nl: {
        modalTitle: "Hey, wil je een cookie?"
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
  };
  var settings; //
  // Methods
  //

  /**
   * Attach the banner to the body
   */

  var showCookieWindow = function showCookieWindow() {
    // Make the wrapper
    var cookieWindow = document.createElement("section");
    cookieWindow.className = settings.classPrefix + "_modal"; // Inner container

    var cookieWindow_inner = document.createElement("div");
    cookieWindow_inner.className = settings.classPrefix + "_modal_inner";
    cookieWindow.appendChild(cookieWindow_inner); // Append child to wrapper
    // Inner head

    var cookieWindow_head = document.createElement("h1");
    cookieWindow_head.className = settings.classPrefix + "_modal_head";
    cookieWindow_head.innerHTML = settings.text[settings.language].modalTitle;
    cookieWindow_inner.appendChild(cookieWindow_head); // Append before </body> tag
    // Add to body

    document.body.appendChild(cookieWindow); // Append before </body> tag
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
  };
  /**
   * Initialize AMPEr
   */


  publicMethod.init = function (options) {
    // Merge settings with defaults
    settings = Object.assign({}, defaults, options); // Check if there already is a cookie, otherwise show the window and make one.

    var cookie = getCookie(settings.cookieName);

    if (cookie === null) {
      setCookie(settings.cookieName, AMPEr, settings.cookieDays);
    } else {
      var cookieString = getCookie(settings.cookieName);
      AMPEr = JSON.parse(cookieString);
    }

    showCookieWindow(); // Execute callbacks

    execute();
  };
  /**
   * Add the modal to the html
   */


  publicMethod.openModal = function () {
    showCookieWindow();
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
  }; //
  // Return the Public Methods
  //


  return publicMethod;
}();