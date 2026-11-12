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

function craftingScreen() {
    document.querySelector("#crafting-player-dropdown").attributes.value.value = "N/A";
    document.querySelector("#crafting-player-dropdown > label").textContent = "Select teamate";

    // hide all schematic buttons
    addClass("#schematics-picker > button", "hide");
    // deselect all schematic buttons
    removeClass("#schematics-picker > button", "selected");

    addClass("#crafting-player-dropdown > section", "hide");

    // show unlocked schematic buttons
    const unlockedSchematics = gameState.unlocked.schematic;
    for (let i = 0; i < unlockedSchematics.length; i++) {
        const schematicButton = document.querySelector(
            `#schematics-picker > [data-schematic="${unlockedSchematics[i]}"]`,
        );
        if (schematicButton) schematicButton.classList.remove("hide");
    }

    toggleScreen("crafting");
}
