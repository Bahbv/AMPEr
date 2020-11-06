# <img src="https://raw.githubusercontent.com/Bahbv/AMPEr/master/src/AMPEr/svg/roze-koek.svg" width="30" height="30"> AMPEr
AMPEr is a vanilla js cookiebanner compliant with the EU GDPR.  
(A)nalytic (M)arketing (P)ersonalization (E)ssential rozekoek.

A roze koek ("pink cake") is a typical Dutch pastry. It consists of a small flat cake with a layer of pink fondant icing. 

# Usage
### Modifying source
I've used NPM and gulp while making this.   
If you want to make changes you can clone the repo, do a `npm install` and execute `gulp` to build the project and serve it with browsersync.    

### Adding to site
Put the dist/AMPEr folder somewhere on your webhost or CDN.  
Add AMPEr.js and AMPEr.css to your page like this  
```html
<link rel="stylesheet" href="./dist/AMPEr/css/AMPEr.css">
<script src="./dist/AMPEr/js/AMPEr.js"></script>
```
Initialize amper with the following script
```js
AMPEr.init({
  debugMode: true,
  // More options here ..
});
```

# Default options
You can use the following options.  
`cookieName` default: "Amper" // This is the name of the cookie that saves the consent.  
`cookieDays` default: 365 // Amount of days the cookie is saved before erased by the browser.  
`classPrefix` default: "AMPEr" // If you want to use you own styling.    
`debugMode` default: false // Change this to true if you want to open the modal every pageload.  
`language` default: "en" // What language from the lexicon we want to use.  
`lexicon` // see below for more information.  
`analyticCallback` default: `function () { console.log("Consent for analytic cookies!");` // Triggers when it has consent for analytic cookies
`marketingCallback` default: `function () { console.log("Consent for marketing cookies!");` // Triggers when it has consent for marketing cookies
`personalizationCallback` default: `function () { console.log("Consent for personalization cookies!");` // Triggers when it has consent for personalization cookies


# Lexicon options
I'm just gonna past the default lexicon here, you can change these values to make use of other icons / text.  
You can also add other languages if needed.  
```js
        lexicon: {
            en: {
                modalTitle: "<i class='AMPEr_icon--rozekoek' aria-hidden='true'></i>Cookies!",
                modalContent: "In order to deliver a personalised, responsive service and to improve the site, we remember and store information about how you use it. You can always opt out of them in the settings.",
                acceptBtn: "Accept all <span class='sr-only'>cookies and close this popup.</span>",
                settingsBtn: "<span class='sr-only'>Adjust cookie Settings</span><i class='AMPEr_icon--gear' aria-hidden='true'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z'/></svg></i>",
                settingsTitle: "<i class='AMPEr_icon--rozekoek' aria-hidden='true'></i>Settings",
                saveBtn: "Save <span class='sr-only'>cookie settings and close the this popup.</span>",
                infoBtn: "More info <span class='sr-only'>about cookies</span>",
                infoPage: "/cookie-disclaimer",
                analytic: "Analytic cookies",
                analyticInfo: "For analysing traffic and usage",
                marketing: "Marketing cookies",
                marketingInfo: "For personalised ads",
                personalization: "Personalization cookies",
                personalizationInfo: "For saving user preference and settings",
                essential: "Functional cookies",
                essentialInfo: "Necessary for a working site",
            },
            nl: {
                modalTitle: "<i class='AMPEr_icon--rozekoek' aria-hidden='true'></i>Cookies!",
                modalContent: "Om een gepersonaliseerde, responsieve service te kunnen leveren en om de site te verbeteren, onthouden we informatie over hoe u deze site gebruikt en slaan we deze op. U kunt zich er altijd voor afmelden in de instellingen.",
                acceptBtn: "Accepteer alles <span class='sr-only'>qua cookies en sluit deze popup.</span>",
                saveBtn: "<span class='sr-only'>Instellingen</span> Opslaan <span class='sr-only'>en deze popup sluiten.</span>",
                infoBtn: "Meer info <span class='sr-only'>over cookies</span>",
                infoPage: "/nl/cookie-disclaimer",
                settingsBtn: "<span class='sr-only'>Cookie instellingen wijzigen</span><i class='AMPEr_icon--gear' aria-hidden='true'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z'/></svg></i>",
                settingsTitle: "<i class='AMPEr_icon--rozekoek' aria-hidden='true'></i>Instellingen",
                analytic: "Analytische cookies",
                analyticInfo: "Analyseren het verkeer en gebruik",
                marketing: "Marketing cookies",
                marketingInfo: "Voor persoonlijke advertenties",
                personalization: "Personalisatie cookies",
                personalizationInfo: "Slaan voorkeuren en instellingen op",
                essential: "Functionele cookies",
                essentialInfo: "Zijn noodzakelijk voor een werkende site",
            },
        },
```

# Public functions


# Accessibility
`AMPEr.init(options)` Initialize the cookiebanner with options specified above.  
`AMPEr.openModal()` Renders the modal / appends the modal before the closing </body>
`AMPEr.getConsent(category)` Returns true or false if consent is given for the category, available categorys are "analytic", "marketing" and "personalization".   
`AMPEr.analytic(boolean)` Sets content true or false for the analytic cookies, doesn't fire the callback.    
`AMPEr.marketing(boolean)` Sets content true or false for the marketing cookies, doesn't fire the callback.    
`AMPEr.personalization(boolean)` Sets content true or false for the personalization cookies, doesn't fire the callback.    


### What i did
I tried to make the banner as accesible as possible.  
The focus changes to the modal when opening, the modal has correct role, labeledby and descripedby.  
.sr-only class is included in the css to make some text visually hidden an accesible by screen readers.  
I also make use of a little script that sets using-mouse to the <html> so focus styles aren't visible when the mouse is being used.  
  
### Using mouse script
```js
const a11yFocus = function () {
    // Initially add the using mouse class, because most people do.
    document.documentElement.classList.add('using-mouse');
    // Let the document know when the mouse is being used
    document.body.addEventListener('mousedown', function () {
        document.documentElement.classList.add('using-mouse');
    });
    // Re-enable focus styling when Tab is pressed
    document.body.addEventListener('keydown', function (event) {
        if (event.keyCode === 9) {
            document.documentElement.classList.remove('using-mouse');
        }
    });
}
```

# Lastly
I hope this cookiebanner is helpfull!  
Cheers, BahbV.
