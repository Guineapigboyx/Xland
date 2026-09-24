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
