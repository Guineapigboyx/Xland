function toggleScreen(buttonClicked) {
    // Turn off all screens
    if (buttonClicked === "home") {
        removeClass("#bottom-null", "hide");
        // Go though every screen and hide their section class
        for (let i = 0; i < Object.keys(navButton).length; i++) {
            removeClass(navButton[Object.keys(navButton)[i]].sectionClass, "hide");
        }
        return;
    }

    addClass("#bottom-null", "hide");
    const navButtonClicked = navButton[buttonClicked];

    // If the screens sectionClass is hidden show it and switch the button to say return
    if (hasClass(navButtonClicked.sectionClass, "hide")) {
        updateTextContent(navButtonClicked.id, "return");
        removeClass(navButtonClicked.sectionClass, "hide");
    } else {
        updateTextContent(navButtonClicked.id, navButtonClicked.buttonText);
        addClass(navButtonClicked.sectionClass, "hide");
    }

    // if there are no screens active show the nothing to show text
    let noScreen = true;
    for (let i = 0; i < Object.keys(navButton).length; i++) {
        if (!hasClass(navButton[Object.keys(navButton)[i]].sectionClass, "hide")) noScreen = false;
    }
    if (noScreen) {
        removeClass("#bottom-null", "hide");
    }
}
