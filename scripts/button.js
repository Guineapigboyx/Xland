function toggleScreen(buttonClicked) {
    let sectionClass;
    const navButtonClicked = navButton[buttonClicked];

    if (!navButton[buttonClicked]) {
        console.error(`navbutton for ${buttonClicked} is not difined`);
        return;
    }

    // Checks if the screen is alreday active (it needs to be up here since the next it disables all screens)
    let buttonAlredayActive = false;
    if (hasClass(navButtonClicked.sectionClass, "hide")) {
        buttonAlredayActive = true;
    }

    // switch off of all screens
    for (let i = 0; i < Object.keys(navButton).length; i++) {
        section = navButton[Object.keys(navButton)[i]];
        updateTextContent(section.id, section.buttonText);
        addClass(section.sectionClass, "hide");
    }

    // If the screens sectionClass is hidden show it and switch the button to say retur
    if (buttonAlredayActive) {
        addClass("#bottom-null", "hide");
        updateTextContent(navButtonClicked.id, "return");
        removeClass(navButtonClicked.sectionClass, "hide");
    } else {
        removeClass("#bottom-null", "hide");
    }
}
