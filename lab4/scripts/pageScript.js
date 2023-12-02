(function () {
    window.addEventListener('load', function () {
        var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;

        openPopup('Время загрузки страницы:', loadTime + ' мс');
    });

    function openPopup(title, message) {
        var popup = document.getElementById('popup');
        var popupText = document.getElementById('popup-text');

        popupText.textContent = title + ' ' + message;
        popup.style.display = 'block';

        setTimeout(function () {
            closePopup();
        }, 3000);
    }

    function closePopup() {
        var popup = document.getElementById('popup');
        popup.style.display = 'none';
    }

    var currentPage = document.location.pathname.split('/').pop(); 

    var menuItems = document.querySelectorAll('.buttons a');

    menuItems.forEach(function (item) {
        if (item.getAttribute('href') === '/' + currentPage || item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        }
    });
})();
