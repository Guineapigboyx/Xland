function createCtxtOptions(optionsFor, type) {
    switch (optionsFor) {
        case eqipmentSlot:
            return [
                {
                    label: `uneqip ${equipSlots[type]}`,
                    action: () => unEquip(type),
                },
                {
                    label: `inspect ${type}`,
                    action: () => inspectItem(type),
                },
            ];
        default:
            return [
                {
                    label: "no actions",
                    action: () => console.warn(`no ctxt options for ${optionsFor}`),
                },
            ];
            break;
    }
}

function createTeamCtx(selector, reset) {
    let options = [];

    if (Object.keys(gameState.activeTeam).length <= 0) {
        // get rid of options if there are none
        options.push({
            label: "Nobody in team :(",
            action: () => false,
        });
    } else {
        for (let i = 0; i < Object.keys(gameState.activeTeam).length; i++) {
            // convert i into a list a person
            const person = gameState.activeTeam[Object.keys(gameState.activeTeam)[i]];

            options.push({
                label: person.personData.name,
                action: () => dropdownSelect(person.personData.name),
            });
        }
    }

    return options;
}

// Drop downs

/**
 * Handles clikcing on a dropdown
 *
 * @param {String} selector - the selector of the dropdown
 * @param {Object} options - options for the drop down [use createOptions for objects and arrays]
 * @param {Event} clicked - just put event at as the last argument of a onclick
 */
function clickDropDown(selector, options, clicked) {
    dropdownEL = document.querySelector(selector);
    dropdownOptionsEL = document.querySelector(`${selector} > section`);
    if (!dropdownOptionsEL) {
        console.warn("Broken Selector for dropdown", selector);
        return;
    }

    // hide/show dropdown
    if (dropdownOptionsEL.classList.contains("hide")) {
        // show dropdown-----------------------------------------------
        dropdownOptionsEL.classList.remove("hide");

        // make the dropdown go upwards
        if (dropdownEL.classList.contains("upwards")) {
            dropdownOptionsEL.style.transform = `translateY(-${dropdownEL.offsetHeight}px)`;
        } else {
            dropdownOptionsEL.style.transform = "";
        }

        resetDropdown(dropdownOptionsEL);

        // create the dropdown options
        for (let i = 0; i < options.length; i++) {
            let option = document.createElement("option");
            option.textContent = options[i].label;
            option.value = options[i].label;
            option.className = "hover";
            dropdownOptionsEL.appendChild(option);
        }
    } else {
        // hide dropdown-----------------------------------------------
        const option = clicked.target.closest("option");

        if (option && dropdownOptionsEL.contains(option)) {
            dropdownEL.setAttribute("value", option.value);
            dropdownEL.querySelector("label").textContent = option.textContent;
        }

        dropdownOptionsEL.classList.add("hide");
    }
}

/**
 *
 * @param {Object|Array} list - the object or arrey the options are comeing from
 * @param {Function|undefined} requirements - if it is object limit the options to only ones that fit a spesfic critera
 * @param {Boolean|undefined} removeInvalid - if true it will hide options not fitting the requirement insided of disableing
 *
 */
function createOptions(list, requirements, removeInvalid) {
    let options = [];
    let badList = [];
    let keyList = [];

    if (typeof list === "object" && !Array.isArray(list)) {
        keyList = Object.keys(list);

        if (requirements) {
            badList = keyList.filter((key) => !requirements(list[key]));

            // find which items in the list do not fit the requiremnt
            if (!badList) {
                badList = [];
            } else if (removeInvalid && typeof removeInvalid === "boolean") {
                keyList = keyList.filter((key) => !badList.includes(key));
                badList = [];
            }
        }

        // build options
        for (let i = 0; i < keyList.length; i++) {
            options.push({ label: keyList[i], invalid: badList.includes(keyList[i]) });
        }
    } else if (Array.isArray(list)) {
        // build options
        for (let i = 0; i < list.length; i++) {
            options.push({ label: list[i], invalid: false });
        }
    } else {
        console.warn("invalid list to create options");
    }

    return options;
}

// context menue

function showContextMenu(x, y, options) {
    // Create the context menu container
    const menu = document.createElement("div");
    menu.classList.add("context-menu");
    menu.style.left = x + "px";
    menu.style.top = y + "px";

    // Add buttons for each option
    options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option.label;
        button.classList.add("context-button hover");

        button.onclick = (e) => {
            e.stopPropagation();
            if (typeof option.action === "function") {
                option.action();
            }
            removal();
        };

        menu.appendChild(button);
    });

    document.body.appendChild(menu);

    // Adjust position if off-screen
    const rect = menu.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // If menu goes off right edge, shift it left
    if (rect.right > viewportWidth) {
        menu.style.left = x - rect.width + "px";
    }

    // If menu goes off bottom edge, shift it up
    if (rect.bottom > viewportHeight) {
        menu.style.top = y - rect.height + "px";
    }

    const removal = () => {
        if (menu.parentNode) {
            menu.parentNode.removeChild(menu);
        }
    };

    // Click-to-dismiss: close when clicking outside
    const clickHandler = (e) => {
        if (!menu.contains(e.target)) {
            removal();
            document.removeEventListener("click", clickHandler);
            document.removeEventListener("contextmenu", clickHandler);
        }
    };

    // Delay to prevent immediate dismissal
    setTimeout(() => {
        document.addEventListener("click", clickHandler);
        document.addEventListener("contextmenu", clickHandler);
    }, 100);

    return removal;
}

/**
 *
 * @param {String} selector - CSS selector for where the icons go
 * @param {Array} inventory - should be a array of inventoryItems
 * @returns
 */
function fillInventory(selector, inventory) {
    const inventoryEl = document.querySelector(selector);
    if (!inventoryEl) {
        console.warn("Invalid inventory selector", inventoryEl);
        return;
    }
    clearInventory(selector);

    for (let invenItems = 0; invenItems < inventory.length; invenItems++) {
        iconData = getIcon(inventory[invenItems]);
        if (!iconData) {
            console.warn("Failed to get icon Data");
            continue;
        }

        let icon = createItemIcon(iconData);
        if (!icon) {
            console.warn("Failed to create icon");
            continue;
        }

        icon.dataset.inslot = inventory[invenItems].item;
        icon.classList.add("border-extra-thin", "context-pointer", "fit-svg");

        inventoryEl.appendChild(icon);
    }
}

function clearInventory(selector) {
    const inventoryEl = document.querySelector(selector);
    if (!inventoryEl) {
        console.warn("Invalid inventory selector", inventoryEl);
        return;
    }
    inventoryEl.replaceChildren();
}

/**
 * Put a dropdown into an element
 *
 * @param {HTMLElement} dropDownRoot - The element to put the dropdown in
 * @param {Array|object} options - Options generated by createOptions()
 * @param {String} selector - Selector of dropDownRoot
 * @param {String} baseValue - Default value when nothing is selected
 */
function createDropDown(dropDownRoot, options, selector, baseValue) {
    if (!(dropDownRoot instanceof HTMLElement)) {
        console.error("createDropDown: Invalid dropdown root", dropDownRoot);
        return;
    }

    if (!Array.isArray(options)) {
        console.warn("createDropDown: Options must be an array", options);
        return;
    }

    // Create the elements
    const label = document.createElement("label");
    const section = document.createElement("section");
    const baseOption = document.createElement("option");

    // Setup the default option
    label.textContent = baseValue;

    baseOption.className = "hover";
    baseOption.dataset.value = "N/A";
    baseOption.textContent = baseValue;

    // Setup the options container
    section.className = "bubble hide";
    section.append(baseOption);

    // Setup the dropdown root
    dropDownRoot.setAttribute("value", "N/A");
    dropDownRoot.replaceChildren(label, section);

    // Open the dropdown when clicked
    dropDownRoot.onclick = (event) => {
        clickDropDown(selector, options, event);
    };
}
