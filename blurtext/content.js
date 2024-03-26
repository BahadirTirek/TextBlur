function blurText(node) {
    node.style.color = 'transparent';
    node.style.textShadow = '0 0 5px rgba(0,0,0,0.5)';
}

function removeBlurText(node) {
    node.style.color = '';
    node.style.textShadow = '';
}

function blurAllText() {
    const allButtons = document.querySelectorAll(".bolt-table-cell-content button");
    const buttonsExcludingNames = [...allButtons].filter(
        (button) => !button.querySelector('.vss-Persona')
    );
    const allLinks = [...document.querySelectorAll(".bolt-table-two-line-cell-item .flex-column .ms-Link")];

    [...buttonsExcludingNames, ...allLinks].forEach(blurText);
}

function removeBlurFromAllText() {
    const allTextNodes = document.querySelectorAll('body *');
    allTextNodes.forEach(removeBlurText);
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'blurText') {
        blurAllText();
    } else if (message.action === 'removeBlurText') {
        removeBlurFromAllText();
    }
});
