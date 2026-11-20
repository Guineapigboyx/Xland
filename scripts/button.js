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
        modifyClass(section.sectionClass, "hide", "add");
    }

    // If the screens sectionClass is hidden show it and switch the button to say retur
    if (buttonAlredayActive) {
        modifyClass("#bottom-null", "hide", "add");
        updateTextContent(navButtonClicked.id, "return");
        modifyClass(navButtonClicked.sectionClass, "hide", "remove");
    } else {
        modifyClass("#bottom-null", "hide", "remove");
    }
}

function craftingScreen() {
    document.querySelector("#crafting-player-dropdown").attributes.value.value = "N/A";
    document.querySelector("#crafting-player-dropdown > label").textContent = "Select teamate";

    // hide all schematic buttons
    modifyClass("#schematics-picker > button", "hide", "add");
    // deselect all schematic buttons
    modifyClass("#schematics-picker > button", "selected", "remove");
    // hide play dropdown options
    modifyClass("#crafting-player-dropdown > section", "hide", "add");

    // clear module selector, craft preview, inventory
    clearDiv("#module-selector");
    clearDiv("#material-selector");
    clearDiv("#craft-preview");
    clearDiv(".craft-screen > .inventory");

    // show unlocked schematic buttons
    const unlockedSchematics = gameState.unlocked.schematic;
    for (let i = 0; i < unlockedSchematics.length; i++) {
        const schematicButton = document.querySelector(
            `#schematics-picker > [data-schematic="${unlockedSchematics[i]}"]`,
        );
        if (schematicButton) modifyClass(schematicButton, "hide", "remove");
    }

    toggleScreen("crafting");
}

// switch the part selector
function clickPartNav(section) {
    let otherSection;

    // finds out which section you clicked on
    if (section === "material") {
        otherSection = "module";
    } else if (section === "module") {
        otherSection = "material";
    } else {
        console.warn("Nav button broken", section);
        return;
    }

    // add selected class to nav button
    modifyClass(`#part-selectors > nav > [data-slot="${section}"]`, "selected", "add");
    modifyClass(`#part-selectors > nav > [data-slot="${otherSection}"]`, "selected", "remove");

    // hides/shows modules/materials
    modifyClass(`#${otherSection}-selector`, "hide", "add");
    modifyClass(`#${section}-selector`, "hide", "remove");
}
