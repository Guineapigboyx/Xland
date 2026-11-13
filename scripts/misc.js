// Class helpers --------------------------------------------------------------
function toggleClass(selector, classNameToToggle) {
    document.querySelectorAll(selector).forEach((el) => {
        el.classList.toggle(classNameToToggle);
    });
}

function addClass(selector, classNameToToggle) {
    document.querySelectorAll(selector).forEach((el) => {
        el.classList.add(classNameToToggle);
    });
}

function removeClass(selector, classNameToToggle) {
    document.querySelectorAll(selector).forEach((el) => {
        el.classList.remove(classNameToToggle);
    });
}

// Text helpers ---------------------------------------------------------------

// Changes an element's text content to newText
function updateTextContent(selector, newText) {
    document.querySelector(selector).textContent = newText;
}

// If the element's text content is text2, change it to text. Otherwise, change it to text2.
function toggleTextBetween(selector, text, text2) {
    const el = document.querySelector(selector);
    el.textContent = el.textContent.trim() === text2 ? text : text2;
}

// style function
function changeStyle(selector, property, value) {
    document.querySelectorAll(selector).forEach((el) => {
        el.style[property] = value;
    });
}

// Returns true if an element shouldn't be clicked, false otherwise
function isClickDisabled(ownSelector) {
    const el = document.querySelector(ownSelector);

    return el.classList.contains("disabled-click");
}

function scaleWindow() {
    const height = window.innerHeight;
    const width = window.innerWidth;

    //checks if the window is smaller in width than main
    if (window.innerHeight / window.innerWidth > 0.6) {
        //scales the window to fit
        document.documentElement.style.setProperty(
            "--scale",
            2.4 * (window.innerWidth / window.innerHeight) * 0.6 + "vh",
        );
    } else {
        document.documentElement.style.removeProperty("--scale", "2.4vh");
    }
}

function hasClass(selector, classToCheck) {
    if (document.querySelector(selector).classList.contains(classToCheck)) {
        return true;
    } else return false;
}

// clear drop down options
function resetDropdown(dropDownOptionsEL) {
    dropDownOptionsEL.replaceChildren(dropdownOptionsEL.firstElementChild);
}

/**
 * Runs map() with a specified property.
 * Bassicly allows you to make a new array one Object deeper
 *
 * @param {Object|Array} object - The object or array you want to map.
 * @param {string} path - The property you want to retrieve.
 */
function mapObject(object, path) {
    if (typeof object !== "object" || object === null) {
        console.log("Invalid data for mapObject()", object);
        return [];
    }

    return (Array.isArray(object) ? object : Object.values(object)).map((x) => x?.[path]);
}

/*
Basic function for testing parts of xland

Gives a full team with (koopa,locario,link)
Unlocks every person

Gives koopa every item in the game.
Gives locario every module (not crafted items). (with the material1 set to urainum and material2 set to raindite)
gives link every material as ingot.
*/
function testingFunction() {
    const keysPerson = Object.keys(basePepole);
    const itemKeys = Object.keys(items);
    const moduleKeys = Object.keys(modules);

    for (let i = 0; i < keysPerson.length; i++) {
        addNewTeamate(basePepole[keysPerson[i]]);
    }

    addToTeam(gameState.persons.koopa);
    addToTeam(gameState.persons.locario);
    addToTeam(gameState.persons.link);

    // give koopa every item
    for (let i = 0; i < itemKeys.length; i++) {
        addItemToInventory(makeInventoryItem(itemKeys[i]), gameState.persons.koopa.inventory);
    }

    // give locario every module
    for (let i = 0; i < moduleKeys.length; i++) {
        const module = {
            item: moduleKeys[i],
            craftedItemID: undefined,
            material1: "uranium",
            material2: "raindite",
            inventory: [],
            timesUsed: 0,
        };

        addItemToInventory(module, gameState.persons.locario.inventory);
    }

    // give every material to link
    for (let i = 0; i < materials.length; i++) {
        addItemToInventory(
            makeInventoryItem("wood", undefined, materials[i]),
            gameState.persons.link.inventory,
        );
    }
}
