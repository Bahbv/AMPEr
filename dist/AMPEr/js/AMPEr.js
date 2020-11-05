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
  var firstFocusedElement;
  var firstTime = false;
  var modal; // Cookie object

  var AMPEr = {
    analytic: 1,
    marketing: 1,
    personalization: 1
  }; // Defaults

  var defaults = {
    cookieName: "AMPEr",
    cookieDays: 365,
    classPrefix: "AMPEr",
    language: "en",
    lexicon: {
      en: {
        modalTitle: "<i class='AMPEr_icon--rozekoek' aria-hidden='true'></i>Cookies?",
        modalContent: "This is body text for giving a little bit more information about cookies in the modal ENGELS",
        acceptBtn: "Accept all <span class='sr-only'>cookies and close this popup.</span>",
        settingsBtn: "<span class='sr-only'>Settings</span><i class='AMPEr_icon--gear' aria-hidden='true'></i>",
        saveBtn: "Save <span class='sr-only'>cookie settings and close the this popup.</span>",
        backBtn: "Back <span class='sr-only'>to first screen.</span>",
        analytic: "Analytic cookies",
        marketing: "Marketing cookies",
        personalization: "Personalization cookies",
        essential: "Functional cookies"
      },
      nl: {
        modalTitle: "<i class='AMPEr_icon--rozekoek' aria-hidden='true'></i>Cookies?",
        modalContent: "Dit is body tekst voor een klein beetje tekst met wat extra informatie in de cookiemodal NEDERLANDS.",
        acceptBtn: "Accepteer alles <span class='sr-only'>qua cookies en sluit deze popup.</span>",
        saveBtn: "<span class='sr-only'>Instellingen</span> Opslaan <span class='sr-only'>en deze popup sluiten.</span>",
        backBtn: "Terug <span class='sr-only'>Naar het vorige scherm</span>",
        settingsBtn: "<span class='sr-only'>Instellingen</span><i class='AMPEr_icon--gear' aria-hidden='true'></i>",
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
   * Make the banner / modal, attach listeners and attacht it to the body
   * @TODO: Switch to settings and back, make it accesible with a focus switch?
   * @TODO: Show settings only if there is a cookie for it
   * @TODO: Make the information HTML
   */

  var showCookieWindow = function showCookieWindow() {
    // Make the modal 
    var html;
    html = '<div class="' + settings.classPrefix + '_modal" id="AMPEr_Cookies" role="dialog" aria-labelledby="AMPEr_title" aria-describedby="AMPEr_description">';
    html += '<div class="' + settings.classPrefix + '_modal_inner">';
    html += '<div id="AMPEr_modal_1">';
    html += '<h2 class="' + settings.classPrefix + '_modal_head" id="AMPEr_title">' + settings.lexicon[settings.language].modalTitle + '</h2>';
    html += '<p class="' + settings.classPrefix + '_modal_text" id="AMPEr_description">' + settings.lexicon[settings.language].modalContent + '</p>';
    html += '<div class="' + settings.classPrefix + '_modal_buttons">';
    html += '<button id="AMPEr_accept" class="' + settings.classPrefix + '_btn ' + settings.classPrefix + '_btn--accept">' + settings.lexicon[settings.language].acceptBtn + '</button>';
    html += '<button id="AMPEr_settings" class="' + settings.classPrefix + '_btn ' + settings.classPrefix + '_btn--settings">' + settings.lexicon[settings.language].settingsBtn + '</button>';
    html += '</div></div>';
    html += '<div id="AMPEr_modal_2">';
    html += '<ul class="' + settings.classPrefix + '_switches">';
    html += '<li class="' + settings.classPrefix + '_switch">';
    html += '<input type="checkbox" id="AMPEr_essential" checked disabled />';
    html += '<label for="AMPEr_essential">';
    html += '<span>' + settings.lexicon[settings.language].essential + '</span><span></span>';
    html += '</li>';
    html += '<li class="' + settings.classPrefix + '_switch">';
    html += '<input type="checkbox" id="AMPEr_analytic"/>';
    html += '<label for="AMPEr_analytic">';
    html += '<span>' + settings.lexicon[settings.language].analytic + '</span><span></span>';
    html += '</li>';
    html += '<li class="' + settings.classPrefix + '_switch">';
    html += '<input type="checkbox" id="AMPEr_marketing" />';
    html += '<label for="AMPEr_marketing">';
    html += '<span>' + settings.lexicon[settings.language].marketing + '</span><span></span>';
    html += '</li>';
    html += '<li class="' + settings.classPrefix + '_switch">';
    html += '<input type="checkbox" id="AMPEr_personalization" />';
    html += '<label for="AMPEr_personalization">';
    html += '<span>' + settings.lexicon[settings.language].personalization + '</span><span></span>';
    html += '</li>';
    html += '</ul>';
    html += '<div class="' + settings.classPrefix + '_modal_buttons">';
    html += '<button id="AMPEr_save" class="' + settings.classPrefix + '_btn ' + settings.classPrefix + '_btn--save">' + settings.lexicon[settings.language].saveBtn + '</button>';
    html += '<button id="AMPEr_back" class="' + settings.classPrefix + '_btn ' + settings.classPrefix + '_btn--back">' + settings.lexicon[settings.language].backBtn + '</button>';
    html += '</div>';
    html += '</div>';
    html += '</div></div>';
    document.body.insertAdjacentHTML('beforeend', html);
    modal = document.getElementById('AMPEr_Cookies');
    setFocus();
    addModalListeners();
  };

  var addModalListeners = function addModalListeners() {
    // Analytic checkbox
    var analyticSwitch = document.getElementById("AMPEr_analytic");

    if (AMPEr.analytic == 1) {
      analyticSwitch.checked = true;
    }

    analyticSwitch.onchange = function () {
      if (this.checked == true) {
        AMPEr.analytic = 1;
      } else {
        AMPEr.analytic = 0;
      }
    }; // Marketing checkbox


    var marketingSwitch = document.getElementById("AMPEr_marketing");

    if (AMPEr.marketing == 1) {
      marketingSwitch.checked = true;
    }

    marketingSwitch.onchange = function () {
      if (this.checked == true) {
        AMPEr.marketing = 1;
      } else {
        AMPEr.marketing = 0;
      }
    }; // Personalization checkbox


    var personalizationSwitch = document.getElementById("AMPEr_personalization");

    if (AMPEr.personalization == 1) {
      personalizationSwitch.checked = true;
    }

    personalizationSwitch.onchange = function () {
      if (this.checked == true) {
        AMPEr.personalization = 1;
      } else {
        AMPEr.personalization = 0;
      }
    }; // Close on escape when focus is in modal


    modal.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        saveAndClose();
      }
    }); // Buttons

    var acceptBtn = document.getElementById("AMPEr_accept");

    acceptBtn.onclick = function () {
      acceptAllAndClose();
    };

    var settingsBtn = document.getElementById("AMPEr_settings");

    settingsBtn.onclick = function () {
      showSettings();
    };

    var saveBtn = document.getElementById("AMPEr_save");

    saveBtn.onclick = function () {
      saveAndClose();
    };

    var backBtn = document.getElementById("AMPEr_back");

    backBtn.onclick = function () {
      console.log("Back button..");
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
   * Closes the modal and set the focus where it was
   * @TODO:we could use a class and a timeout to give this a nice animation,
   * or animate it with javascript?
   */


  var closeModal = function closeModal() {
    var modal = document.getElementById("AMPEr_Cookies");
    modal.remove();
    firstFocusedElement.focus();
  };
  /**
   * @TODO: Switch to the settings page, a nice animation would be nice,
   * but maybe just use classes for now so we can style it however we want?
   */


  var showSettings = function showSettings() {
    console.log("Show settings");
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
   * Save the element that is in focus and set the
   * focus to the first tabable element of the modal
   */


  var setFocus = function setFocus() {
    firstFocusedElement = document.activeElement;
    var focusableElements = modal.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');
    focusableElements = Array.prototype.slice.call(focusableElements);
    var firstFocusableElement = focusableElements[0];
    firstFocusableElement.focus();
  }; //////////////////
  // Public methods
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

    if (firstTime || settings.debugMode) {
      showCookieWindow();
    }

    if (!firstTime) {
      execute();
    }
  };
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