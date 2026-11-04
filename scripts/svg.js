/**
 * @typedef {Object} itemIcons - all of the SVG's in xland
 * @property {svgData} - data about the svg
 *
 * @typedef {Object} svgData -
 * @property {String} cssClass - the CSS class this SVG is useing
 * @property {String} file - the Assets/items/ file path to the svg files
 * @property {undefined|svg} svg - the svg file data, it will be filled in by loadIcons
 */
let itemIcons = [
    { cssClass: "item-adamantite", file: "items/adamantite.svg" },
    { cssClass: "item-aluminum", file: "items/aluminum.svg" },
    { cssClass: "item-amber", file: "items/amber.svg" },
    { cssClass: "item-apple", file: "items/apple.svg" },
    { cssClass: "item-bean", file: "items/bean.svg" },
    { cssClass: "item-blue-berry", file: "items/blue berry.svg" },
    { cssClass: "item-bulborb", file: "items/bulborb.svg" },
    { cssClass: "item-cactus", file: "items/cactus.svg" },
    { cssClass: "item-cloth", file: "items/cloth.svg" },
    { cssClass: "item-coal", file: "items/coal.svg" },
    { cssClass: "item-copper", file: "items/copper.svg" },
    { cssClass: "item-corn", file: "items/corn.svg" },
    { cssClass: "item-crystalFlower", file: "items/crystal flower.svg" },
    { cssClass: "item-crystalFruit", file: "items/crystal fruit.svg" },
    { cssClass: "item-deathFruit", file: "items/death fruit.svg" },
    { cssClass: "item-dragonFruit", file: "items/dragon fruit.svg" },
    { cssClass: "item-eurekaLeaves", file: "items/eureka leaves.svg" },
    { cssClass: "item-fireFlower", file: "items/fire flower.svg" },
    { cssClass: "item-fireHerb", file: "items/fire herb.svg" },
    { cssClass: "item-flameright", file: "items/flameright.svg" },
    { cssClass: "item-flint", file: "items/flint.svg" },
    { cssClass: "item-flower", file: "items/flower.svg" },
    { cssClass: "item-fummingFlower", file: "items/fumming flower.svg" },
    { cssClass: "item-ghostPepper", file: "items/ghost pepper.svg" },
    { cssClass: "item-glass", file: "items/glass.svg" },
    { cssClass: "item-gold", file: "items/gold.svg" },
    { cssClass: "item-goop", file: "items/goop.svg" },
    { cssClass: "item-grass", file: "items/grass.svg" },
    { cssClass: "item-hyruleHerb", file: "items/hyrule herb.svg" },
    { cssClass: "item-iron", file: "items/iron.svg" },
    { cssClass: "item-killerBerry", file: "items/killer berry.svg" },
    { cssClass: "item-lead", file: "items/lead.svg" },
    { cssClass: "item-leaf", file: "items/leaf.svg" },
    { cssClass: "item-leather", file: "items/leather.svg" },
    { cssClass: "item-lifeFruit", file: "items/life fruit.svg" },
    { cssClass: "item-lithium", file: "items/lithium.svg" },
    { cssClass: "item-magnesium", file: "items/magnesium.svg" },
    { cssClass: "item-meat", file: "items/meat.svg" },
    { cssClass: "item-masterOre", file: "items/master ore.svg" },
    { cssClass: "item-milk", file: "items/milk.svg" },
    { cssClass: "item-mint", file: "items/mint.svg" },
    { cssClass: "item-mithril", file: "items/mithril.svg" },
    { cssClass: "item-mushroom", file: "items/mushroom.svg" },
    { cssClass: "item-orangeBerries", file: "items/orange berries.svg" },
    { cssClass: "item-pale", file: "items/pale.svg" },
    { cssClass: "item-pepper", file: "items/pepper.svg" },
    { cssClass: "item-pikminMeat", file: "items/pikmin meat.svg" },
    { cssClass: "item-pikmin", file: "items/pikmin.svg" },
    { cssClass: "item-platinum", file: "items/platinum.svg" },
    { cssClass: "item-plutonium", file: "items/plutonium.svg" },
    { cssClass: "item-powder", file: "items/powder.svg" },
    { cssClass: "item-rat", file: "items/rat.svg" },
    { cssClass: "item-rice", file: "items/rice.svg" },
    { cssClass: "item-shinyStone", file: "items/shiny stone.svg" },
    { cssClass: "item-shroomSoup", file: "items/shroom soup.svg" },
    { cssClass: "item-silver", file: "items/silver.svg" },
    { cssClass: "item-stone", file: "items/stone.svg" },
    { cssClass: "item-string", file: "items/string.svg" },
    { cssClass: "item-tin", file: "items/tin.svg" },
    { cssClass: "item-titanium", file: "items/titanium.svg" },
    { cssClass: "item-treeBranch", file: "items/tree branch.svg" },
    { cssClass: "item-uramite", file: "items/uramite.svg" },
    { cssClass: "item-uranium", file: "items/uranium.svg" },
    { cssClass: "item-venom", file: "items/venom.svg" },
    { cssClass: "item-volcanoFruit", file: "items/volcano fruit.svg" },
    { cssClass: "item-water", file: "items/water.svg" },
    { cssClass: "item-watermelon", file: "items/watermelon.svg" },
    { cssClass: "item-wheat", file: "items/wheat.svg" },
    { cssClass: "item-wood", file: "items/wood.svg" },
    { cssClass: "item-xtramite", file: "items/Xtramite.svg" },
    { cssClass: "item-zinc", file: "items/zinc.svg" },

    { cssClass: "item-basicHandle", file: "modules/basic handle.svg" },
    { cssClass: "item-curvedHandle", file: "modules/curved handle.svg" },
    { cssClass: "item-hollowHandle", file: "modules/hollow handle.svg" },
    { cssClass: "item-shieldedHandle", file: "modules/shielded handle.svg" },
    { cssClass: "item-stickyHandle", file: "modules/sticky handle.svg" },
    { cssClass: "item-thickHandle", file: "modules/thick handle.svg" },
    { cssClass: "item-wrapedHandle", file: "modules/wraped handle.svg" },
    { cssClass: "item-flexibleHandle", file: "modules/flexible handle.svg" },
];

/* Someones mad that XML does not support local scope */
const sharedSVGElements = `
<defs>
    <!-- material 1 (new gradient per path) -->
    <linearGradient
        id="M1-center-linear"
        gradientUnits="objectBoundingBox"
        x1="0%" y1="50%"
        x2="100%" y2="50%"
    >
        <stop offset="0" stop-color="var(--M1-color1)" />
        <stop offset="0.48" stop-color="var(--M1-color2)" />
        <stop offset="0.64" stop-color="var(--M1-color3)" />
        <stop offset="1" stop-color="var(--M1-color4)" />
    </linearGradient>

    <radialGradient
        id="M1-center-radial"
        gradientUnits="objectBoundingBox"
        cx="50%" cy="50%"
        r="70%"
        fx="40%" fy="35%"
    >
        <stop offset="0" stop-color="var(--M1-color1)" />
        <stop offset="0.48" stop-color="var(--M1-color2)" />
        <stop offset="0.64" stop-color="var(--M1-color3)" />
        <stop offset="1" stop-color="var(--M1-color4)" />
    </radialGradient>

    <!-- material 2 -->
    <linearGradient
        id="M2-center-linear"
        gradientUnits="objectBoundingBox"
        x1="0%" y1="50%"
        x2="100%" y2="50%"
    >
        <stop offset="0" stop-color="var(--M2-color1)" />
        <stop offset="0.48" stop-color="var(--M2-color2)" />
        <stop offset="0.64" stop-color="var(--M2-color3)" />
        <stop offset="1" stop-color="var(--M2-color4)" />
    </linearGradient>

    <radialGradient
        id="M2-center-radial"
        gradientUnits="objectBoundingBox"
        cx="50%" cy="50%"
        r="70%"
        fx="40%" fy="35%"
    >
        <stop offset="0" stop-color="var(--M2-color1)" />
        <stop offset="0.48" stop-color="var(--M2-color2)" />
        <stop offset="0.64" stop-color="var(--M2-color3)" />
        <stop offset="1" stop-color="var(--M2-color4)" />
    </radialGradient>


    <!-- spillover gradients (1 graident for all paths) -->
    <!-- material 1 -->
    <linearGradient
        id="M1-spill-linear"
        gradientUnits="userSpaceOnUse"
    >
        <stop offset="0" stop-color="var(--M1-color1)" />
        <stop offset="0.48" stop-color="var(--M1-color2)" />
        <stop offset="0.64" stop-color="var(--M1-color3)" />
        <stop offset="1" stop-color="var(--M1-color4)" />
    </linearGradient>

    <radialGradient
        id="M1-spill-radial"
        gradientUnits="userSpaceOnUse"
    >
        <stop offset="0" stop-color="var(--M1-color1)" />
        <stop offset="0.48" stop-color="var(--M1-color2)" />
        <stop offset="0.64" stop-color="var(--M1-color3)" />
        <stop offset="1" stop-color="var(--M1-color4)" />
    </radialGradient>

    <!-- material 2 -->
    <linearGradient
        id="M2-spill-linear"
        gradientUnits="userSpaceOnUse"
    >
        <stop offset="0" stop-color="var(--M2-color1)" />
        <stop offset="0.48" stop-color="var(--M2-color2)" />
        <stop offset="0.64" stop-color="var(--M2-color3)" />
        <stop offset="1" stop-color="var(--M2-color4)" />
    </linearGradient>

    <radialGradient
        id="M2-spill-radial"
        gradientUnits="userSpaceOnUse"
    >
        <stop offset="0" stop-color="var(--M2-color1)" />
        <stop offset="0.48" stop-color="var(--M2-color2)" />
        <stop offset="0.64" stop-color="var(--M2-color3)" />
        <stop offset="1" stop-color="var(--M2-color4)" />
    </radialGradient>
</defs>
`;

function displayIcon() {
    for (let icon of itemIcons) {
        if (!icon.svg) continue;

        document.querySelectorAll(`item-icon.${icon.cssClass}`).forEach((element) => {
            // Skip if the correct icon is already loaded
            if (element.dataset.svgLoaded === icon.cssClass) return;

            // Create or reuse the shadow root
            let shadow =
                element.shadowRoot ||
                element.attachShadow({
                    mode: "open",
                });

            // apply the material colors
            applyIconMaterials(element);

            // Insert the SVG into the shadow root
            shadow.innerHTML = icon.svg;
            shadow.querySelector("svg").setAttribute("part", "svg");

            element.dataset.svgLoaded = icon.cssClass;

            // select if it should use ingot or center gradients
            shadow.querySelectorAll("[data-material][data-gradient]").forEach((path) => {
                const number = path.dataset.material;
                const layout = path.dataset.gradient;

                const type = getComputedStyle(element)
                    .getPropertyValue(`--M${number}-material-gradient`)
                    .trim();

                const gradient = `url(#M${number}-${layout}-${type})`;

                if (path.getAttribute("stroke-width")) {
                    path.style.stroke = gradient;
                    path.style.fill = "none";
                } else {
                    path.style.fill = gradient;
                }
            });
        });
    }
}

function applyIconMaterials(icon) {
    for (let i = 1; ; i++) {
        const material = icon.getAttribute(i === 1 ? "data-material" : `data-material${i}`);

        if (!material) break;

        // Get the existing material CSS
        const temp = document.createElement("item-icon");
        temp.dataset.material = material;
        temp.style.cssText = "position:absolute;visibility:hidden";
        document.body.appendChild(temp);

        const style = getComputedStyle(temp);

        // Copy and rename the material variables
        for (const name of [
            "color1",
            "color2",
            "color3",
            "color4",
            "color-edge",
            "material-gradient",
        ]) {
            let value = style.getPropertyValue(`--${name}`).trim();

            // Rename variable references to the correct material slot
            value = value
                .replace(/--color([1-4])/g, `--M${i}-color$1`)
                .replace(/\b(duo2-mix|duo3-mix|triple3-mix)\b/g, `var(--M${i}-$1)`);

            if (value) {
                icon.style.setProperty(`--M${i}-${name}`, value);
            }
        }

        temp.remove();
    }
}

async function loadIcons() {
    let fetcher;

    for (let icon = 0; icon < itemIcons.length; icon++) {
        if (!itemIcons[icon].file) {
            console.warn(`error loading icon ${icon}`);
            continue;
        }

        fetcher = await fetch(`Assets/${itemIcons[icon].file}`);
        itemIcons[icon].svg = await fetcher.text();

        let svg = new DOMParser().parseFromString(
            itemIcons[icon].svg,
            "image/svg+xml",
        ).documentElement;

        svg.insertAdjacentHTML("afterbegin", sharedSVGElements);

        // Automatically position spill gradients
        const [x, y, width, height] = svg
            .getAttribute("viewBox")
            .trim()
            .split(/[\s,]+/)
            .map(Number);

        svg.querySelectorAll('[id$="-spill-linear"]').forEach((gradient) => {
            gradient.setAttribute("x1", x);
            gradient.setAttribute("y1", y + height / 2);
            gradient.setAttribute("x2", x + width);
            gradient.setAttribute("y2", y + height / 2);
        });

        svg.querySelectorAll('[id$="-spill-radial"]').forEach((gradient) => {
            gradient.setAttribute("cx", x + width / 2);
            gradient.setAttribute("cy", y + height / 2);
            gradient.setAttribute("r", Math.max(width, height) / 2);
        });

        itemIcons[icon].svg = svg.outerHTML;
    }

    displayIcon();
}
loadIcons();

document.addEventListener("DOMContentLoaded", () => {
    const svgObserver = new MutationObserver((mutations) => {
        for (let mutation of mutations) {
            if (mutation.type === "childList") {
                for (let node of mutation.addedNodes) {
                    if (node.nodeType !== 1) continue;

                    if (node.matches("item-icon") || node.querySelector("item-icon")) {
                        displayIcon();
                        return;
                    }
                }
            }

            if (mutation.type === "attributes" && mutation.attributeName === "class") {
                let element = mutation.target;
                if (!element.matches("item-icon")) continue;

                let oldItem = (mutation.oldValue || "")
                    .split(/\s+/)
                    .find((c) => c.startsWith("item-"));

                let newItem = [...element.classList].find((c) => c.startsWith("item-"));

                if (oldItem !== newItem) {
                    displayIcon();
                    return;
                }
            }
        }
    });

    svgObserver.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class"],
        attributeOldValue: true,
    });
});
