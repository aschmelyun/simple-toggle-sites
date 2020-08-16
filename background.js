chrome.runtime.onInstalled.addListener(function() {
    localStorage.setItem('toggleSitesActive', false);
    localStorage.setItem('toggleSitesList', 'example.com');
});

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var cancel = false;

        var active = localStorage.getItem('toggleSitesActive');
        if (active === 'true') {
            var sites = localStorage.getItem('toggleSitesList').split(/\n/);
            cancel = sites.some(site => {
                var url = new URL(details.url);

                return Boolean(url.hostname.indexOf(site) !== -1);
            });
        }

        return {
            cancel: cancel
        };
    },
    {
        urls: ["<all_urls>"]
    },
    [
        "blocking"
    ]
);