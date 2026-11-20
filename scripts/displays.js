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
    const dropdownEL = document.querySelector(selector);
    const dropdownOptionsEL = document.querySelector(`${selector} > section`);
    if (!dropdownOptionsEL || !dropdownEL) {
        console.warn("Broken Selector for dropdown", selector);
        return;
    }

    // hide/show dropdown
    if (dropdownOptionsEL.classList.contains("hide")) {
        // show dropdown-----------------------------------------------
        modifyClass(dropdownOptionsEL, "hide", "remove");

        // make the dropdown go upwards
        if (dropdownEL.classList.contains("upwards")) {
            dropdownOptionsEL.style.transform = `translateY(-${dropdownEL.offsetHeight}px)`;
        } else {
            dropdownOptionsEL.style.transform = "";
        }

        clearDiv(dropdownOptionsEL, 1);

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
            const oldValue = dropdownEL.getAttribute("value");
            const newValue = option.value;

            dropdownEL.setAttribute("value", newValue);
            dropdownEL.querySelector("label").textContent = option.textContent;

            // only dispatch if the value actually changed
            if (oldValue !== newValue) {
                dropdownEL.dispatchEvent(
                    new CustomEvent("dropdownChange", {
                        bubbles: true,
                        detail: {
                            value: newValue,
                            previousValue: oldValue,
                            option,
                        },
                    }),
                );
            }
        }

        modifyClass(dropdownOptionsEL, "hide", "add");
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
    modifyClass(menu, "context-menu", "add");
    menu.style.left = x + "px";
    menu.style.top = y + "px";

    // Add buttons for each option
    options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option.label;
        modifyClass(button, "context-button hover", "add");

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
    clearDiv(selector);

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
        modifyClass(icon, "border-extra-thin context-pointer fit-svg inventory-item", "add");

        // item count number
        let countIndicator = document.createElement("span");
        countIndicator.textContent = inventory[invenItems].count;
        countIndicator.className = "bubble square-bubble small-text count-indictor";
        icon.appendChild(countIndicator);

        // put data in attributes
        icon.dataset.slot = invenItems;

        inventoryEl.appendChild(icon);
    }
}

/**
 * Put a dropdown into an element
 *
 * @param {HTMLElement} dropDownRoot - The element to put the dropdown in
 * @param {Array|object} options - Options generated by createOptions()
 * @param {String} selector - Selector of dropDownRoot
 * @param {String} baseValue - Default value when nothing is selected
 * @param {String} type - the data-dropdown for this dropdown
 */
function createDropDown(dropDownRoot, options, selector, baseValue, type) {
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
    label.className = "pointer";

    baseOption.className = "hover";
    baseOption.value = "N/A";
    baseOption.textContent = baseValue;

    // Setup the options container
    section.className = "bubble hide";
    section.append(baseOption);

    // Setup the dropdown root
    dropDownRoot.setAttribute("value", "N/A");
    dropDownRoot.replaceChildren(label, section);

    dropDownRoot.dataset.dropdown = type;

    // Open the dropdown when clicked
    dropDownRoot.onclick = (event) => {
        clickDropDown(selector, options, event);
    };
}

/**
 * Creates a positioned container relative to a target element
 * @param {string|Element} targetSelector - CSS selector or DOM Element
 * @returns {{container: HTMLElement, inner: HTMLElement, target: Element, verticalPos: string, horizontalPos: string, removal: Function} | null}
 */
function createPositionedContainer(targetSelector) {
    //there are 2 unused classes
    // top what flips the speach bubble upsidedown
    // left what makes the bubble come from the right side insted of left
    let target = null;
    if (typeof targetSelector === "string") {
        target = document.querySelector(targetSelector);
    } else if (targetSelector instanceof Element) {
        target = targetSelector;
    }

    if (!target) return null;

    // Get position of the target element
    const targetRect = target.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Determine where the bubble extends based on where the target is
    let verticalPos = "top";
    if (targetRect.y < screenHeight / 3) {
        // Top 1/3 of the screen, flip the box down
        verticalPos = "bottom";
    }

    let horizontalPos = "right";
    if (targetRect.x > screenWidth / 3) {
        // Right 2/3 of the screen, flip the box to the left
        horizontalPos = "left";
    }

    // Bounding box for transformations
    const container = document.createElement("div");
    container.classList.add("textcontainerbox");

    container.style.top = targetRect.y + "px"; // Distance from the top of the viewport
    container.style.left = targetRect.x + "px"; // Distance from the left of the viewport
    container.style.width = target.offsetWidth + "px"; // Width of target
    container.style.height = target.offsetHeight + "px"; // Height of target

    // Inner container for horizontal positioning
    const inner = document.createElement("div");
    inner.classList.add("innertext", verticalPos, horizontalPos);
    if (horizontalPos === "left") {
        inner.style.width = target.offsetLeft + "px"; // Distance from the edge of the parent container
    }
    inner.style.height = target.offsetHeight + "px"; // Height of target

    document.body.appendChild(container);
    container.appendChild(inner);

    const removal = () => container.remove();

    return { container, inner, target, verticalPos, horizontalPos, removal };
}

/**
 * Shows a speech bubble text box near the target element for a given duration.
 * @param {string|HTMLElement} targetSelector - CSS selector for the target element or DOM Element
 * @param {string} text - text to display
 * @param {number} time - duration in milliseconds
 * @param {boolean} waitForRemoval - if true, holds up the caller until the box disappears
 * @returns {Promise<void>|void}
 */
async function spawnTextBox(targetSelector, text, time, waitForRemoval = false) {
    const positioned = createPositionedContainer(targetSelector);
    if (!positioned) return;

    const { inner, target, verticalPos, horizontalPos, removal } = positioned;

    // Create the textbox
    const textbox = document.createElement("dialog");
    textbox.classList.add("textbox", verticalPos, horizontalPos);
    if (horizontalPos === "right") {
        textbox.style.width = target.offsetLeft + target.offsetWidth + "px";
    }
    textbox.textContent = text;
    textbox.setAttribute("open", "");

    inner.appendChild(textbox);

    // If time is 0, wait for Shift key release to remove
    if (time === 0) {
        return new Promise((resolve) => {
            function onShiftRelease(e) {
                if (e.key === "Shift") {
                    document.removeEventListener("keyup", onShiftRelease);
                    removal();
                    resolve();
                }
            }
            document.addEventListener("keyup", onShiftRelease);
        });
    }

    // Remove the text box after the specified time
    if (waitForRemoval) {
        return new Promise((resolve) => {
            setTimeout(() => {
                removal();
                resolve();
            }, time);
        });
    }

    await new Promise((resolve) => setTimeout(resolve, time));
    removal();
}
