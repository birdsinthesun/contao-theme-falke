(function ($) {
    $.fn.cookieBar = function (options) {
        var settings = $.extend({
            cookieName: "cookieAccepted",
            cookieDuration: 1, //Tage
            barClass: "cookie-bar",
            buttonClass: "cookie-button"
        }, options);

        var $cookieBar = this;

        // Prüfen, ob das Cookie gesetzt ist
        if (getCookie(settings.cookieName)) {
            $cookieBar.remove();
            return this;
        }

        // Button suchen und Klick-Event hinzufügen
        var $button = $cookieBar.find("." + settings.buttonClass);
        $button.on("click", function () {
            setCookie(settings.cookieName, "true", settings.cookieDuration);
            $cookieBar.fadeOut();
        });

        $cookieBar.fadeIn();

        function setCookie(name, value, days) {
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + value + expires + "; path=/";
        }

        function getCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(";");
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i].trim();
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        return this;
    };
})(jQuery);
