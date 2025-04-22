(function ($) {
    $.fn.dropdownNav = function () {
        return this.each(function () {
            var $nav = $(this);
            var $toggler = $nav.find('.level_1 > li.submenu > .toggler');

            function openNav($item) {
                closeAllNav(); // Schließt alle geöffneten Menüs, bevor ein neues geöffnet wird

                $item.parent().addClass('show');
                $item.parent().parent().addClass('open');

                var level_1 = $item.parent().parent();
                var count_li = level_1.find('> li.show ul > li').length;
                var level_1_a_height = level_1.find('> li.show > a').outerHeight();
                var level_1_strong_height = level_1.find('> li.show > strong').outerHeight();
                var level_1_ul_margintop = parseInt(level_1.find('ul').css('margin-top'), 10);

                var newHeight = (count_li + 1) * (level_1_a_height || level_1_strong_height) + level_1_ul_margintop;
                level_1.css('height', newHeight + 'px');
            }

            function closeNav($item) {
                var level_1 = $item.parent().parent();
                $item.parent().removeClass('show');
                level_1.removeClass('open');
                level_1.css('height', '');
            }

            function closeAllNav() {
                $nav.find('.submenu.show').each(function () {
                    closeNav($(this).find('.toggler'));
                });
            }

            $toggler.click(function (event) {
                event.preventDefault();
                event.stopPropagation(); // Verhindert das Schließen beim Klicken auf den Toggler

                var _this = $(this);
                if (_this.parent().hasClass('show')) {
                    closeNav(_this);
                } else {
                    openNav(_this);
                }
            });

            // Klick außerhalb der Navigation schließt das Menü
            $(document).click(function () {
                closeAllNav();
            });
            $nav.find('.level_1').not('a').click(function () {
                closeAllNav();
            });

            // Verhindert das Schließen beim Klicken innerhalb der Navigation
            $nav.click(function (event) {
                event.stopPropagation();
            });
        });
    };
})(jQuery);
