var checkbox = document.getElementById('active');

checkbox.addEventListener('change', function() {
    localStorage.setItem('toggleSitesActive', this.checked);
});

var save = document.getElementById('save');

save.addEventListener('click', function(e) {
    e.preventDefault();

    localStorage.setItem('toggleSitesList', document.getElementById('sites').value);
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('sites').value = localStorage.getItem('toggleSitesList');
    if (localStorage.getItem('toggleSitesActive') === 'true') {
        document.getElementById('active').checked = true;
    } else {
        document.getElementById('active').checked = false;
    }
});