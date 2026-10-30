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

function fillInventory(selector, inventory) {
    const inventoryEl = document.querySelector(selector);
    if (!inventoryEl) {
        console.warn("Invalid inventory selector", inventoryEl);
        return;
    }
    inventoryEl.replaceChildren();

    for (let invenItems = 0; invenItems < inventory.length; invenItems++) {
        let item = document.createElement("img");
        item.dataset.inslot = inventory[invenItems].item;
        item.className = "border-extra-thin context-pointer";
        inventoryEl.appendChild(item);
    }
}

// Drop downs

function showDropdown(selector, options) {
    dropdownEL = document.querySelector(selector);
    dropdownOptionsEL = document.querySelector(`${selector} > section`);
    if (!dropdownOptionsEL) {
        console.warn("Broken Selector for dropdown", selector);
        return;
    }

    // make the dropdown go upwards
    if (dropdownEL.classList.contains("upwards")) {
        dropdownOptionsEL.style.transform = `translateY(-${dropdownEL.offsetHeight}px)`;
        console.log("yay");
    } else {
        dropdownOptionsEL.style.transform = "";
    }

    dropdownOptionsEL.replaceChildren(dropdownOptionsEL.firstElementChild);

    console.log(options);

    for (let i = 0; i < options.length; i++) {
        let option = document.createElement("option");
        option.textContent = options[i].label;
        option.value = options[i].label;
        option.className = "hover";
        dropdownOptionsEL.appendChild(option);
    }

    dropdownOptionsEL.classList.remove("hide");
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

    if (typeof list === "object") {
        keyList = Object.keys(list);
        badList = keyList.filter((key) => !requirements(list[key]));

        if (!badList) {
            badList = [];
        } else if (removeInvalid) {
            keyList = keyList.filter((key) => !badList.includes(key));
            badList = [];
        }

        for (let i = 0; i < keyList.length; i++) {
            options.push({ label: keyList[i], invalid: badList.includes(keyList[i]) });
        }
    } else if (typeof list === "array") {
        options.push({ label: keyList[i], invalid: false });
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
