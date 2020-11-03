/*!
 * AMPEr
 * Vanilla javascript cookie banner compliant with the EU GDPR
 * (c) 2020 Bob Vrijland, MIT License, https://github.com/bahbv 
 */
var AMPEr = (function () {

	'use strict';

    //////////////////
    // Variables
    //////////////////

    const publicMethod = {};
    let settings;
    let firstTime = false;
    // Cookie object
    let AMPEr = {
        analytic: 0,
        marketing: 0,
        personalization: 0,
    }
    // Defaults
    let defaults = {
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
                essential: "Functional cookies",
            },
            nl: {
                modalTitle: "Hey, wil je een cookie?",
                modalContent: "Dit is body tekst voor een klein beetje tekst met wat extra informatie in de cookiemodal NEDERLANDS.",
                acceptBtn: "Accepteer alles",
                settingsBtn: "<span class='sr-only'>Instellingen</span>",
                analytic: "Analytische cookies",
                marketing: "Marketing cookies",
                personalization: "Personalisatie cookies",
                essential: "Functionele cookies",
            },
        },
        // @TODO: Maak multilingual
        cookies: {
            analytic: {
                vb1: {
                    name: "Analytic cookie",
                    provider: "Provider",
                    duration: "Sessie",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                },
            },
            marketing: {
                vb2: {
                    name: "Marketing cookie",
                    provider: "Wij zelf",
                    duration: "Sessie",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                },
            },
            personalization: {
                vb3: {
                    name: "Personalization cookie",
                    provider: "Wij zelf",
                    duration: "Sessie",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                },
            },
            essential: {
                amper: {
                    name: "AMPEr",
                    provider: "Wij zelf",
                    duration: "365 Dagen",
                    description: "Deze cookie onthoud jouw voorkeuren voor cookies. Heel dubbel maar deze cookie is dus noodzakelijk als je geen cookies wilt!"
                },
            },
        },

        analyticCallback: function(){
            console.log("Consent for analytic cookies!");
        },
        marketingCallback: function(){
            console.log("Consent for marketing cookies!")
        },
        personalizationCallback: function(){
            console.log("Consent for personalization cookies!")
        },
    };
    
    //////////////////
    // Private methods
    //////////////////

	/**
	 * Make the banner and attacht it to the body
     * @TODO: Make the settings HTML
     * @TODO: Make the information HTML
	 */
	const showCookieWindow = function () {
        // Make the modal
        let html;
        html =  '<section class="'+ settings.classPrefix +'_modal" id="AMPEr_Cookies">';
        html += '<div class="'+ settings.classPrefix +'_modal_inner">';
        html += '<div id="AMPEr_modal_1">';
        html += '<h1 class="'+ settings.classPrefix +'_modal_head">'+ settings.lexicon.[settings.language].modalTitle +'</h1>'
        html += '<p class="'+ settings.classPrefix +'_modal_text">'+ settings.lexicon.[settings.language].modalContent +'</p>'
        html += '<div class="'+ settings.classPrefix +'_modal_buttons">';
        html += '<button id="AMPEr_accept" class="'+ settings.classPrefix +'_btn '+ settings.classPrefix +'_btn--accept">'+ settings.lexicon.[settings.language].acceptBtn +'</button>';
        html += '<button id="AMPEr_settings" class="'+ settings.classPrefix +'_btn '+ settings.classPrefix +'_btn--settings">'+ settings.lexicon.[settings.language].settingsBtn +'</button>';
        html += '</div></div>';
        html += '</div></section>';
        
        // Add the html to the body
        document.body.insertAdjacentHTML( 'beforeend', html );

        // Add functions to the buttons
        const acceptBtn = document.getElementById("AMPEr_accept");
        acceptBtn.onclick = function(){ acceptAllAndClose(); };
        const settingsBtn = document.getElementById("AMPEr_settings");
        settingsBtn.onclick = function(){ showSettings(); };
    };

    /**
     * Execute the callbacks for analytic, marketing and personalization cookies
     */
    const execute = function (){
        if (AMPEr.analytic == 1) settings.analyticCallback();
        if (AMPEr.marketing == 1) settings.marketingCallback();
        if (AMPEr.personalization == 1) settings.personalizationCallback();
    }
    
    /**
     * Saves the AMPEr object to a cookie and close the modal 
     * Also executes the callbacks if its the first time running.
     */
    const saveAndClose = function(){
        setCookie(settings.cookieName, AMPEr, settings.cookieDays);
        if (firstTime){ execute(); }
        closeModal();
    }

    /**
     * @TODO: Switch to the settings page, a nice animation would be nice,
     * but maybe just use classes for now so we can style it however we want?
     */
    const showSettings = function(){
        console.log("Show settings");
    }

    /**
     * Closes the modal
     * @TODO:we could use a class and a timeout to give this a nice animation,
     * or animate it with javascript?
     */
    const closeModal = function(){
        const modal = document.getElementById("AMPEr_Cookies");
        modal.remove();
    }

    /* Accept all cookies, execute them if its the first time and close the modal */
    const acceptAllAndClose = function(){
        AMPEr.analytic = 1;
        AMPEr.marketing = 1;
        AMPEr.personalization = 1;
        setCookie(settings.cookieName, AMPEr, settings.cookieDays);
        if (firstTime){ execute(); }
        closeModal();
    }

    /**
     * Set a cookie 
     * @param {String} name 
     * @param {*} value 
     * @param {Number} days 
     */
    const setCookie = function (name,value,days) {
        value = JSON.stringify(value); 
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }

    /**
     * Get a cookie
     * @param {String} name 
     */
    const getCookie = function (name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i=0;i < ca.length;i++) {
            let c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
    
    //////////////////
    // Initialize
    //////////////////

	/**
	 * Initialize AMPEr
	 */
	publicMethod.init = function (options) {
        
        // Merge settings with defaults
        settings = Object.assign({}, defaults, options);
        
        // Check if there already is a cookie, otherwise show the window and make one.
        const cookie = getCookie(settings.cookieName);
        if (cookie === null){
            firstTime = true;
            setCookie(settings.cookieName, AMPEr, settings.cookieDays);
        } else {
            let cookieString = getCookie(settings.cookieName);
            AMPEr = JSON.parse(cookieString);
        }

        showCookieWindow();
        // Execute callbacks
        if (!firstTime) { execute(); }

    };

    //////////////////
    // Public methods
    //////////////////

    /**
     * Add the modal to the html
     */
    publicMethod.openModal = function (){
        showCookieWindow();
    }   

    /**
     * Returns true if the given category has consent given
     * @param {String} category 
     */
    publicMethod.getConsent = function (category) {
        switch (category) {
            case "analytic":
                if (AMPEr.analytic == 1){ return true; } else { return false; }
            case "marketing":
                if (AMPEr.marketing == 1){ return true; } else { return false; }
            case "personalization":
                if (AMPEr.personalization == 1){ return true; } else { return false; }
            default:
                console.log("Not a valid category")
                break;
        }
    }

    /**
     * Set the consent for analytic cookies
     * @param {Boolean} bool 
     */
    publicMethod.analytic = function (bool){
        bool ? AMPEr.analytic = 1 : AMPEr.analytic = 0;
        setCookie(settings.cookieName, AMPEr, settings.cookieDays);
    }

    /**
     * Set the consent for marketing cookies
     * @param {Boolean} bool 
     */
    publicMethod.marketing = function (bool){
        bool ? AMPEr.marketing = 1 : AMPEr.analytic = 0;
        setCookie(settings.cookieName, AMPEr, settings.cookieDays);
    }
    
    /**
     * Set the consent for personalization cookies
     * @param {Boolean} bool 
     */
    publicMethod.personalization = function (bool){
        bool ? AMPEr.personalization = 1 : AMPEr.analytic = 0;
        setCookie(settings.cookieName, AMPEr, settings.cookieDays);
    }

    // Return the public methods
	return publicMethod;

})();
