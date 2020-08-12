var activeOn = document.getElementById('activeOn'),
    activeOff = document.getElementById('activeOff'),
    save = document.getElementById('save'),
    sites = document.getElementById('sites');

activeOn.addEventListener('click', function(e) {
    e.preventDefault();

    activeOn.classList.add('is-active');
    activeOff.classList.remove('is-active');
    localStorage.setItem('toggleSitesActive', true);

    chrome.browserAction.setIcon({
        path: 'dist/images/icon-16x16.png'
    });
});

activeOff.addEventListener('click', function(e) {
    e.preventDefault();

    activeOff.classList.add('is-active');
    activeOn.classList.remove('is-active');
    localStorage.setItem('toggleSitesActive', false);

    chrome.browserAction.setIcon({
        path: 'dist/images/icon-16x16-off.png'
    });
});

var save = document.getElementById('save');

save.addEventListener('click', function(e) {
    e.preventDefault();

    localStorage.setItem('toggleSitesList', sites.value);
});

document.addEventListener("DOMContentLoaded", function() {
    sites.value = localStorage.getItem('toggleSitesList');
    if (localStorage.getItem('toggleSitesActive') === 'true') {
        activeOn.classList.add('is-active');
    } else {
        activeOff.classList.add('is-active');
    }
});