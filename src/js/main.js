function main() {
    a11yFocus();


    AMPEr.init({
        debugMode: true,
        language: "en",
        instantSettings: true,
        lexicon: {
            en: {
                infoPage: "/cookies",
                settingsTitle: "<i class='AMPEr_icon--rozekoek' aria-hidden='true'></i>Cookie settings",
            }
        }
    });
}

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


main();