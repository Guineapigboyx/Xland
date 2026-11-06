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
    clearInventory(selector);

    for (let invenItems = 0; invenItems < inventory.length; invenItems++) {
        let item = document.createElement("item-icon");
        item.dataset.inslot = inventory[invenItems].item;
        item.className = `border-extra-thin context-pointer fit-svg ${items[inventory[invenItems].item].SVG}`;

        if (inventory[invenItems].material1) {
            item.dataset.material = inventory[invenItems].material1;
            item.dataset.material2 = inventory[invenItems].material2;
        } else {
            item.dataset.material = items[inventory[invenItems].item].name.toLowerCase();
        }

        inventoryEl.appendChild(item);
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

/**
 * This is for get icon data for non crafted item icons (icons that are only 1 SVG)
 *
 * @param {string|items.item|iventoryItem} icon - either a item iventoryItem or a item-icon CSS class
 * @param {string} material - data-material "does nothing for crafted items"
 */
function getIcon(icon, material) {
    let iconData = [];

    if (!icon) {
        console.warn("can't get data for invalid icon", icon);
        return;
    }

    if (icon.craftedItemID) {
        // this is a crafted item
        const craftedItem = getCraftedItem(icon);
        for (let i = 0; i < craftedItem.components.craftedModules.length; i++) {
            const craftedModule = craftedItem.components.craftedModules[i];
            // the materials in module.materials[0] are for material1 while module.materials[1] are for material 2
            const materialOffset = craftedModule.module.materials[0].amount;

            let currentIcon = {
                class: craftedModule.module.SVG,
                material: craftedModule.materials[0],
                material2: craftedModule.materials[0 + materialOffset],
            };
            console.log(materialOffset);

            // If the material is a valid item switch it to the items name
            // prettier-ignore
            if (currentIcon.material) 
                currentIcon.material = items[currentIcon.material.item].name;

            if (currentIcon.material2)
                currentIcon.material2 = items[currentIcon.material2.item].name;

            iconData.push(currentIcon);
        }
        return iconData;
    }

    // non crafted items --------------------------------------------

    iconData.push({
        class: undefined,
        material: undefined,
        material2: undefined,
    });

    if (icon.SVG) {
        // this is a items.item
        iconData[0].class = `item-${icon.SVG}`;
        iconData[0].material = icon.name.toLocaleLowerCase();
    } else if (items[icon.item] && !icon.craftedItemID) {
        if (!items[icon.item].SVG) {
            console.log("Item has no SVG", icon);
            return;
        }

        iconData[0].class = `item-${items[icon.item].SVG}`;
        iconData[0].material = items[icon.item].name.toLocaleLowerCase();
    } else if (itemIcons.find((itemIcon) => itemIcon.cssClass === icon)) {
        // It is item-icon class
        iconData[0].class = icon;

        // find if this icon has a material
        const iconName = (iconData[0].material = icon.split("-")[1]);
        const relatedItem = Object.values(items).find((item) => item.SVG === iconName);

        if (relatedItem) {
            // use the material of a item that shares this icon
            iconData[0].material = relatedItem.name.toLocaleLowerCase();
        } else {
            // use the icon name (like copper) as the material
            iconData[0].material = iconName;
        }
    } else {
        console.warn("can't find data for invalid icon", icon);
        return;
    }

    if (material) iconData[0].material = material;

    return iconData;
}
