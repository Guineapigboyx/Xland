document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector("#crafting-player-dropdown");

    const observer = new MutationObserver(() => {
        const dropdownValue = document.getElementById("crafting-player-dropdown").attributes.value
            .value;

        // reset craft screen
        if (dropdownValue === "N/A") {
            clearInventory(".craft-screen > .inventory");
            return;
        }

        if (!gameState.persons[dropdownValue]) {
            console.warn("invalid person");
            return;
        }

        // crafting screen with that persons data
        fillInventory(".craft-screen > .inventory", gameState.persons[dropdownValue].inventory);
    });

    observer.observe(dropdown, {
        attributes: true,
        attributeFilter: ["value"],
    });
});
