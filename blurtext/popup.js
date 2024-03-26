//popup.js
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('blurButton').addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: 'blurText'});
        });
    });

    document.getElementById('removeBlurButton').addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: 'removeBlurText'});
        });
    });
});
