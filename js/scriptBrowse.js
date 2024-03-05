window.addEventListener('scroll', function() {
    var headerSolid = document.getElementById('headerSolid');
    if (window.pageYOffset > 0) {
        headerSolid.classList.add('show');
    } else {
        headerSolid.classList.remove('show');
    }
});