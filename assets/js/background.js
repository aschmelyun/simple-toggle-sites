// when the extension is first installed, set default values
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({
        toggleSitesActive: false,
        toggleSitesList: 'example.com'
    }, function() {});
});

// set up initial chrome storage values
var toggleSitesActive = false;
var toggleSitesList = 'example.com';

chrome.storage.sync.get([
    'toggleSitesActive',
    'toggleSitesList'
], function(result) {
    toggleSitesActive = result.toggleSitesActive;
    toggleSitesList = result.toggleSitesList;
});

// on each site request, block if it's in toggleSitesList
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        // if the toggle is inactive, don't block anything
        if (!toggleSitesActive) {
            return { cancel: false };
        }

        // determine if the url is in toggleSitesList
        var cancel = toggleSitesList.split(/\n/)
            .some(site => {
                var url = new URL(details.url);

                return Boolean(url.hostname.indexOf(site) !== -1);
            });

        return { cancel: cancel };
    },
    {
        urls: ["<all_urls>"]
    },
    [
        "blocking"
    ]
);

// any time a storage item is updated, update global variables
chrome.storage.onChanged.addListener(function(changes, namespace) {
    if (namespace === 'sync') {
        if (changes.toggleSitesActive) {
            toggleSitesActive = changes.toggleSitesActive.newValue;
        }
        if (changes.toggleSitesList) {
            toggleSitesList = changes.toggleSitesList.newValue;
        }
    }
});