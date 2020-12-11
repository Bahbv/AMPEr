"use strict";

/**
 * AMPEr.js
 *
 * AMPEr is a vanilla js cookiebanner compliant with eu gdpr.
 * (A)nalytic (M)arketing (P)ersonalization (E)ssential rozekoek.
 * 
 * @version     2.0
 * @license     http://www.opensource.org/licenses/mit-license.html MIT License
 * @author      Bob Vrijland <bob@bahbv.net>
 * @updated     11-12-2020
 * @link        https://github.com/Bahbv
 */
var AMPEr = function () {
  'use strict'; //////////////////
  // Variables
  //////////////////

  var publicMethod = {};
  var settings;
  var firstFocusedElement;
  var firstTime = false;
  var modal;
  var modal1;
  var modal2; // Cookie object

  var AMPEr = {
    analytic: 1,
    marketing: 1,
    personalization: 1,
    set: 0
  }; // Defaults

  var defaults = {
    cookieName: "AMPEr",
    cookieDays: 365,
    classPrefix: "AMPEr",
    extraClass: "",
    debugMode: false,
    language: "en",
    lexicon: {
      en: {
        modalTitle: "<i class='AMPEr_icon--rozekoek' aria-hidden='true'></i>Cookies!",
        modalContent: "In order to deliver a personalised, responsive service and to improve the site, we remember and store information about how you use it. You can always opt out of them in the settings.",
        acceptBtn: "Accept all <span class='sr-only'>cookies and close this popup.</span>",
        settingsBtn: "<span class='sr-only'>Adjust cookie Settings</span><i class='AMPEr_icon--gear' aria-hidden='true'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z'/></svg></i>",
        settingsTitle: "<i class='AMPEr_icon--rozekoek' aria-hidden='true'></i>Settings",
        saveBtn: "Save <span class='sr-only'>cookie settings and close the this popup.</span>",
        infoBtn: "More info <span class='sr-only'>about cookies</span>",
        infoPage: "/cookies",
        analytic: "Analytic cookies",
        analyticInfo: "For analysing traffic and usage",
        marketing: "Marketing cookies",
        marketingInfo: "For personalised ads",
        personalization: "Personalization cookies",
        personalizationInfo: "For saving user preference and settings",
        essential: "Functional cookies",
        essentialInfo: "Necessary for a working site"
      },
      nl: {
        modalTitle: "<i class='AMPEr_icon--rozekoek' aria-hidden='true'></i>Cookies!",
        modalContent: "Om een gepersonaliseerde, responsieve service te kunnen leveren en om de site te verbeteren, onthouden we informatie over hoe u deze site gebruikt en slaan we deze op. U kunt zich er altijd voor afmelden in de instellingen.",
        acceptBtn: "Accepteer alles <span class='sr-only'>qua cookies en sluit deze popup.</span>",
        saveBtn: "<span class='sr-only'>Instellingen</span> Opslaan <span class='sr-only'>en deze popup sluiten.</span>",
        infoBtn: "Meer info <span class='sr-only'>over cookies</span>",
        infoPage: "/nl/cookies",
        settingsBtn: "<span class='sr-only'>Cookie instellingen wijzigen</span><i class='AMPEr_icon--gear' aria-hidden='true'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z'/></svg></i>",
        settingsTitle: "<i class='AMPEr_icon--rozekoek' aria-hidden='true'></i>Instellingen",
        analytic: "Analytische cookies",
        analyticInfo: "Analyseren het verkeer en gebruik",
        marketing: "Marketing cookies",
        marketingInfo: "Voor persoonlijke advertenties",
        personalization: "Personalisatie cookies",
        personalizationInfo: "Slaan voorkeuren en instellingen op",
        essential: "Functionele cookies",
        essentialInfo: "Zijn noodzakelijk voor een werkende site"
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
   * Render the banner / modal, attach listeners and attach it to the body
   */

  var showCookieWindow = function showCookieWindow() {
    var html;
    html = '<div class="' + settings.classPrefix + '_modal ' + settings.extraClass + '" id="AMPEr_Cookies" role="dialog" aria-labelledby="AMPEr_title" aria-describedby="AMPEr_description">';
    html += '<div class="' + settings.classPrefix + '_modal_inner">';
    html += '<div id="AMPEr_modal_1" class="AMPEr--active">';
    html += '<h2 class="' + settings.classPrefix + '_modal_head" id="AMPEr_title">' + settings.lexicon[settings.language].modalTitle + '</h2>';
    html += '<p class="' + settings.classPrefix + '_modal_text" id="AMPEr_description">' + settings.lexicon[settings.language].modalContent + '</p>';
    html += '<div class="' + settings.classPrefix + '_modal_buttons">';
    html += '<button id="AMPEr_accept" class="' + settings.classPrefix + '_btn ' + settings.classPrefix + '_btn--accept">' + settings.lexicon[settings.language].acceptBtn + '</button>';
    html += '<button id="AMPEr_settings" class="' + settings.classPrefix + '_btn ' + settings.classPrefix + '_btn--settings">' + settings.lexicon[settings.language].settingsBtn + '</button>';
    html += '</div></div>';
    html += '<div id="AMPEr_modal_2">';
    html += '<h2 class="' + settings.classPrefix + '_modal_head">' + settings.lexicon[settings.language].settingsTitle + '</h2>';
    html += '<ul class="' + settings.classPrefix + '_switches">';
    html += '<li class="' + settings.classPrefix + '_switch">';
    html += '<input type="checkbox" id="AMPEr_essential" checked disabled />';
    html += '<label for="AMPEr_essential">';
    html += '<span>' + settings.lexicon[settings.language].essential + '<small>' + settings.lexicon[settings.language].essentialInfo + '</small></span><span></span>';
    html += '</li>';
    html += '<li class="' + settings.classPrefix + '_switch">';
    html += '<input type="checkbox" id="AMPEr_analytic"/>';
    html += '<label for="AMPEr_analytic">';
    html += '<span>' + settings.lexicon[settings.language].analytic + '<small>' + settings.lexicon[settings.language].analyticInfo + '</small></span><span></span>';
    html += '</li>';
    html += '<li class="' + settings.classPrefix + '_switch">';
    html += '<input type="checkbox" id="AMPEr_marketing" />';
    html += '<label for="AMPEr_marketing">';
    html += '<span>' + settings.lexicon[settings.language].marketing + '<small>' + settings.lexicon[settings.language].marketingInfo + '</small></span><span></span>';
    html += '</li>';
    html += '<li class="' + settings.classPrefix + '_switch">';
    html += '<input type="checkbox" id="AMPEr_personalization" />';
    html += '<label for="AMPEr_personalization">';
    html += '<span>' + settings.lexicon[settings.language].personalization + '<small>' + settings.lexicon[settings.language].personalizationInfo + '</small></span><span></span>';
    html += '</li>';
    html += '</ul>';
    html += '<div class="' + settings.classPrefix + '_modal_buttons">';
    html += '<button id="AMPEr_save" class="' + settings.classPrefix + '_btn ' + settings.classPrefix + '_btn--save">' + settings.lexicon[settings.language].saveBtn + '</button>';
    html += '<button id="AMPEr_info" class="' + settings.classPrefix + '_btn ' + settings.classPrefix + '_btn--info">' + settings.lexicon[settings.language].infoBtn + '</button>';
    html += '</div>';
    html += '</div>';
    html += '</div></div>';
    document.body.insertAdjacentHTML('beforeend', html);
    modal = document.getElementById('AMPEr_Cookies');
    setFocus();
    addModalListeners();
  };
  /**
   * Adds all the functions for the checkboxes, buttons and keydown's
   */


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

    var infoBtn = document.getElementById("AMPEr_info");

    infoBtn.onclick = function () {
      window.location = settings.lexicon[settings.language].infoPage;
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
    AMPEr.set = 1;
    setCookie(settings.cookieName, AMPEr, settings.cookieDays);

    if (firstTime) {
      execute();
    }

    closeModal();
  };
  /* Accept all cookies, execute them if its the first time and close the modal */


  var acceptAllAndClose = function acceptAllAndClose() {
    AMPEr.set = 1;
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
   */


  var closeModal = function closeModal() {
    var modal = document.getElementById("AMPEr_Cookies");
    modal.remove();
    firstFocusedElement.focus();
  };
  /**
   * Shows the settings content, sets focus to it
   * and hides the initial content 
   */


  var showSettings = function showSettings() {
    modal1 = document.getElementById("AMPEr_modal_1");
    modal2 = document.getElementById("AMPEr_modal_2");
    modal1.classList.remove("AMPEr--active");
    modal2.classList.add("AMPEr--active");
    setFocusSettings();
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
  };
  /**
   * Sets the focus to the first focusable element in #AMPEr_modal_2
   */


  var setFocusSettings = function setFocusSettings() {
    var focusableElements = modal2.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');
    focusableElements = Array.prototype.slice.call(focusableElements);
    var firstFocusableElement = focusableElements[0];
    firstFocusableElement.focus();
  }; //////////////////
  // Public methods
  //////////////////

  /**
   * Initialize AMPEr
   * @param {object} options 
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

    if (firstTime || AMPEr.set == 0 || settings.debugMode) {
      showCookieWindow();
    }

    if (!firstTime && AMPEr.set == 1) {
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